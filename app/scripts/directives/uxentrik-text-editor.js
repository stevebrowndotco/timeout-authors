'use strict';

/*
Usage: <wysiwyg textarea-id="question" textarea-class="form-control"  textarea-height="80px" textarea-name="textareaQuestion" textarea-required ng-model="question.question" enable-bootstrap-title="true"></wysiwyg>
  options
    textarea-id       The id to assign to the editable div
    textarea-class      The class(es) to assign to the the editable div
    textarea-height     If not specified in a text-area class then the hight of the editable div (default: 80px)
    textarea-name     The name attribute of the editable div 
    textarea-required   HTML/AngularJS required validation
    ng-model        The angular data model
    enable-bootstrap-title  True/False whether or not to show the button hover title styled with bootstrap  

Requires: 
  Twitter-bootstrap, fontawesome, jquery, angularjs, bootstrap-color-picker (https://github.com/buberdds/angular-bootstrap-colorpicker)

  */

angular.module('uxentrik-text-editor', ['colorpicker.module'])
  .directive('uxTeditor', function($timeout, $upload, $http, $compile) {
    return {
      templateUrl: '/partials/templates/uxentrik-text-editor.html',
      restrict: 'E',
      scope: {
        htmlValue: '=ngModel',
        textareaHeight: '@textareaHeight',
        textareaName: '@textareaName',
        textareaPlaceholder: '@textareaPlaceholder',
        textareaClass: '@textareaClass',
        textareaRequired: '@textareaRequired',
        textareaId: '@textareaId',
        textareaEditmode: '@textareaEditmode',
      },
      replace: true,
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelController) {
        console.log("attrs:", attrs);
        console.log("this:", scope);
        console.log("textareaId:", scope.textareaId);
        scope.showImage = false;


        var textarea = element.find('div.wysiwyg-textarea');
        console.log("textarea:", textarea);
        scope.fonts = [
          'Georgia',
          'Palatino Linotype',
          'Times New Roman',
          'Arial',
          'Helvetica',
          'Arial Black',
          'Comic Sans MS',
          'Impact',
          'Lucida Sans Unicode',
          'Tahoma',
          'Trebuchet MS',
          'Verdana',
          'Courier New',
          'Lucida Console',
          'Helvetica Neue'
        ].sort();

        scope.font = scope.fonts[6];

        scope.fontSizes = [{
          value: '1',
          size: '10px'
        }, {
          value: '2',
          size: '13px'
        }, {
          value: '3',
          size: '16px'
        }, {
          value: '4',
          size: '18px'
        }, {
          value: '5',
          size: '24px'
        }, {
          value: '6',
          size: '32px'
        }, {
          value: '7',
          size: '48px'
        }];

        scope.fontSize = scope.fontSizes[1];

        if (attrs.enableBootstrapTitle === "true" && attrs.enableBootstrapTitle !== undefined)
          element.find('button[title]')
            .tooltip({
              container: 'body'
            })

        scope.updateHtml = function() {

          scope.$apply(function readViewText() { //$apply to update the scope
            var html = textarea.html();
            if (html == '<br>') {
              html = '';
            }
            ngModelController.$setViewValue(html);
          });
        };

        scope.isLink = false;

        scope.showImageOptions = false;

        //Used to detect things like A tags and others that dont work with cmdValue().
        function itemIs(tag) {

          var sel = window.getSelection();

          if (sel && sel.rangeCount > 0) {
            var selection = window.getSelection()
              .getRangeAt(0);

            if (selection) {
              if (selection.startContainer.parentNode.tagName === tag.toUpperCase() || selection.endContainer.parentNode.tagName === tag.toUpperCase()) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          } else {
            return false;
          }
        }

        //Used to detect things like A tags and others that dont work with cmdValue().
        function getHiliteColor() {
          var sel = window.getSelection();

          if (sel && sel.rangeCount > 0) {
            var selection = window.getSelection()
              .getRangeAt(0);
            if (selection) {
              var style = $(selection.startContainer.parentNode)
                .attr('style');

              if (!angular.isDefined(style))
                return false;

              var a = style.split(';');
              for (var i = 0; i < a.length; i++) {
                var s = a[i].split(':');
                if (s[0] === 'background-color')
                  return s[1];
              }
              return '#fff';
            } else {
              return '#fff';
            }

          } else {
            return '#fff';
          }
        }

        scope.imageEdit = function(id, e) {
          e.stopPropagation();
          element.find(".popover")
            .remove();
          var img = scope.imgSel = element.find("#" + id);
          var top = img.position()
            .top - 50;
          var left = img.position()
            .left - 50;
          var popWidth = 130;
          if (left < 0) {
            left = 0
          };
          scope.imgH = img.height();
          scope.imgW = img.width();
          console.log(" scope.imgW:", scope.imgW);
          if (left > (textarea.width() - popWidth)) {
            left = textarea.width() - popWidth;
          };
          var temp = '<div id="imgPopover" class="popover top" style="top:' + (top) + 'px; left:' + (left) + 'px;display:block" >' +
            '  <div class="arrow"></div>' +
            '  <div class=" popover-content">' +
            '   <div class="btn-group btn-group-sm wysiwyg-btn-group-margin cs-height-40"> ' +
            '    <button ng-click="imgAlignLeft($event)" id="imgAlignLeft" class="btn btn-default "><i class=" fa fa-align-left"></i></button>   ' +
            '    <button ng-click="imgAlignCenter($event)" id="imgAlignCenter" class="btn btn-default "><i class=" fa fa-align-center"></i></button>   ' +
            '    <button ng-click="imgAlignRight($event)" id="imgAlignRight" class="btn btn-default "><i class=" fa fa-align-right"></i></button>   ' +
            '  </div>' +
            '<div>' +
            '<span>Height: </span><input id="imgHeightInput"  class="form-control form-control-sm" ng-click="imgHeightInputClick($event)" ng-model="imgH" type="number">' +
            '<span>Width: </span><input id="imgWidthInput"  class="form-control form-control-sm" ng-click="imgWidthInputClick($event)" ng-model="imgW" type="number">' +
            '</div>' +
            '<div class="row">' +
            '    <button ng-click="imgDone($event)" id="imgDone" class="btn btn-default ">Done</button>   ' +
            '  </div>' +
            '  </div>' +
            '</div> '


          $compile(textarea)(scope)
        };

        scope.imgDone = function(e) {
          e.stopPropagation();
          scope.imgSel.css('height', scope.imgH + 'px')
          element.find(".popover")
            .remove();

          scope.htmlValue = textarea.html();
          $compile(textarea)(scope)
        };

        scope.imgHeightInputClick = function(e) {
          e.stopPropagation();
        };

        scope.imgWidthInputClick = function(e) {
          e.stopPropagation();

        };
        scope.imgAlignLeft = function(e) {
          e.stopPropagation();
          scope.imgSel.css('float', 'left')
          element.find(".popover")
            .remove();
          scope.htmlValue = textarea.html();
        };

        scope.imgAlignRight = function(e) {
          e.stopPropagation();
          scope.imgSel.css('float', 'right')
          element.find(".popover")
            .remove();
          scope.htmlValue = textarea.html();
        };

        scope.imgAlignCenter = function(e) {
          e.stopPropagation();
          scope.imgSel.css('float', 'none')
          element.find(".popover")
            .remove();
          scope.htmlValue = textarea.html();
        };

        scope.divCount = 0;



        scope.editDiv=function(e) {
        e.stopPropagation();

            console.log("editDiv:");
        var el=element.find(scope.selDiv);
       // scope.selDiv.attr("ng-drag","false");
        console.log("el",el);
        console.log("el.attr('id');:",el.attr('id'));
    //scope.selDiv.first().attr('contenteditable','true')
        };





        scope.addTextBox = function() {
          scope.divCount = scope.divCount + 1;
          console.log("scope.divCount:", scope.divCount);
          //var el = angular.element('<div id="drop'+scope.divCount+'" class="red-border height100 width100" ng-drop="true" ng-drag="true" ng-drag-success="onDragSuccess()" ng-drop-success="onDropSuccess(' + scope.divCount + ',$event)" ></div>')
          var el = angular.element('<div id="drop'+scope.divCount+'" class="red-border height100 width100" ng-drop="true" ng-drag="true" ng-drag-success="onDragSuccess()"><textarea>add text</textarea><span class="pull-right"><button id="editDiv'+scope.divCount+'" ng-click="editDiv($event)" class="btn btn-default">edit</button></span></div>')
     
          el.attr('ng-drop', 'true')
      el.attr('contenteditable','false')
          el.css({position:'absolute',
            float:'left'});

          textarea.append(el);

          console.log("textarea:", textarea);
          scope.htmlValue = textarea.html();
          $compile(textarea)(scope);
          console.log("textarea:", textarea);
        };

        scope.textAreaClick = function() {
          //element.find(".popover").remove();

          scope.isBold = scope.cmdState('bold');
          scope.isUnderlined = scope.cmdState('underline');
          scope.isStrikethrough = scope.cmdState('strikethrough');
          scope.isItalic = scope.cmdState('italic');
          scope.isSuperscript = itemIs('SUP'); //scope.cmdState('superscript');
          scope.isSubscript = itemIs('SUB'); //scope.cmdState('subscript'); 
          scope.isRightJustified = scope.cmdState('justifyright');
          scope.isLeftJustified = scope.cmdState('justifyleft');
          scope.isCenterJustified = scope.cmdState('justifycenter');
          scope.isPre = scope.cmdValue('formatblock') == "pre";
          scope.isBlockquote = scope.cmdValue('formatblock') == "blockquote";
          scope.isOrderedList = scope.cmdState('insertorderedlist');
          scope.isUnorderedList = scope.cmdState('insertunorderedlist');
          scope.fonts.forEach(function(v, k) { //works but kinda crappy.
            if (scope.cmdValue('fontname')
              .indexOf(v) > -1) {
              scope.font = v;
              return false;
            }
          });

          scope.fontSizes.forEach(function(v, k) {
            if (scope.cmdValue('fontsize') === v.value) {
              scope.fontSize = v;
              return false;
            };
          });

          scope.hiliteColor = getHiliteColor();
          element.find('button.wysiwyg-hiliteColor')
            .css("background-color", scope.hiliteColor);

          scope.fontColor = scope.cmdValue('forecolor');
          element.find('button.wysiwyg-fontcolor')
            .css("color", scope.fontColor);

          scope.isLink = itemIs('A');
        };

        textarea.on('keyup', function() {
          scope.updateHtml();
          console.log("textaerat mouse up:");
        });

        scope.onDropSuccess = function(i, evt) {
          console.log("i:", i);
          console.log("onDropSuccess:");
          var drag = element.find("#drag");
          console.log("drag:", drag);
          console.log("evt:", evt);

          element.find("#drop" + i)
            .append(drag)
        }

        scope.onDragSuccess = function() {
          console.log("onDragSuccess:");
          var el=element.find('#drop1');
        };

        // model -> view
        ngModelController.$render = function() {
          textarea.html(ngModelController.$viewValue);
          $compile(textarea)(scope)
        };

        scope.format = function(cmd, arg) {
          document.execCommand(cmd, false, arg);
        }

        scope.format('enableobjectresizing', true);

        scope.format('styleWithCSS', true);

        scope.cmdState = function(cmd, id) {
          return document.queryCommandState(cmd);
        }

        scope.cmdValue = function(cmd) {
          return document.queryCommandValue(cmd);
        }

        scope.createLink = function() {
          var input = alert('Enter the link URL');
          if (input && input !== undefined)
            scope.format('createlink', input);
        }

        scope.insertImage = function(url) {
          if (url && url !== undefined) {
            document.execCommand('insertimage', false, url);
            var findImgs = element.find('.imageContainer');
            if (findImgs) {
              var imgsCount = findImgs.length;
            } else {
              imgsCount = 0;
            };
            console.log("findImgs:", findImgs);
            imgsCount = imgsCount + 1;
            console.log("imgsCount:", imgsCount);
            var findImg = 'img[src ="' + url + '"]';
            var imgFound = element.find(findImg);
            if (imgFound) {
              console.log("imgFound:", imgFound);
              var img = element.find(imgFound[0]);
              var editImgFn = "imageEdit('imgContainer_" + (imgsCount) + "' , $event)";
              console.log("editImgFn:", editImgFn);
              //img.attr('ng-click',editImgFn)
              img.attr('id', 'imgContainer_' + (imgsCount))
              img.attr('style', 'float:none');
              img.attr('class', 'imageContainer');
              img.attr('height', '50px');
              img.wrap('<div id="drag" ng-drag="true"></div>')
              console.log("textarea.html():", textarea);
              console.log("textarea:", textarea);
               scope.htmlValue = textarea.html();
          $compile(textarea)(scope)
            };
          }
        };

        scope.setFont = function() {
          scope.format('fontname', scope.font)
        };

        scope.setFontSize = function() {
          scope.format('fontsize', scope.fontSize.value)
        };

        scope.setFontColor = function() {
          scope.format('forecolor', scope.fontColor)
        };

        scope.setHiliteColor = function() {
          scope.format('hiliteColor', scope.hiliteColor)
        };

        scope.abort = function(index) {
          scope.upload[index].abort();
          scope.upload[index] = null;
        };

        scope.showImagePanel = function() {
          scope.showImage = !scope.showImage
        };

        scope.onFileSelect = function($files) {
          scope.images = [];
          scope.files = $files;
          scope.upload = [];
          for (var i = 0; i < $files.length; i++) {
            var file = $files[i];
            file.progress = parseInt(0);
            (function(file, i) {
              $http.get('/api/s3Policy?mimeType=' + file.type)
                .success(function(response) {

                  var s3Params = response;

                  scope.upload[i] = $upload.upload({
                    url: 'https://uxentrik.s3.amazonaws.com/',
                    method: 'POST',
                    data: {
                      'key': 's3UploadExample/' + Math.round(Math.random() * 10000) + '$$' + file.name,
                      'acl': 'public-read',
                      'Content-Type': file.type,
                      'AWSAccessKeyId': s3Params.AWSAccessKeyId,
                      'success_action_status': '201',
                      'Policy': s3Params.s3Policy,
                      'Signature': s3Params.s3Signature
                    },
                    file: file,
                  });

                  scope.upload[i].then(function(response) {
                    console.log("response:", response);
                    file.progress = parseInt(100);
                    if (response.status === 201) {
                      var images = [];
                      var x2js = new X2JS();
                      var data = x2js.xml_str2json(response.data);
                      console.log("data:", data);
                      var parsedData;
                      var fileName = data.PostResponse.Key.split("$");

                      parsedData = {
                        location: data.PostResponse.Location,
                        bucket: data.PostResponse.Bucket,
                        key: data.PostResponse.Key,
                        etag: data.PostResponse.ETag,
                        fileName: fileName[1]
                      };
                      console.log("parsedData:", parsedData);
                      images.push(parsedData);
                      for (i in images) {
                        scope.insertImage(images[i].location)

                      }

                    } else {
                      alert('Upload Failed');
                    }

                  }, null, function(evt) {
                    file.progress = parseInt(100.0 * evt.loaded / evt.total);
                  });
                });
            }(file, i));
          }
        };
      }
    };
  });



angular.module('myApp')
  .directive('ngDrag', ['$rootScope', '$parse',
    function($rootScope, $parse) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
         
          scope.value = attrs.ngDrag;
          //  return;
          var offset, _mx, _my, _tx, _ty, parentPos, elPos;
          var _hasTouch = ('ontouchstart' in document.documentElement);
          var _pressEvents = 'touchstart mousedown';
          var _moveEvents = 'touchmove mousemove';
          var _releaseEvents = 'touchend mouseup';
          var $document = $(document);
          var $window = $(window);
          var _data = null;
          var _dragEnabled = false;
          var _pressTimer = null;
          var onDragSuccessCallback = $parse(attrs.ngDragSuccess) || null;

          var initialize = function() {
            element.attr('draggable', 'false'); // prevent native drag
            toggleListeners(true);
          };

          var toggleListeners = function(enable) {
            // remove listeners

            if (!enable) return;
            // add listeners.

            scope.$on('$destroy', onDestroy);
            attrs.$observe("ngDrag", onEnableChange);
            scope.$watch(attrs.ngDragData, onDragDataChange);
            element.on(_pressEvents, onpress);
            if (!_hasTouch) {
              element.on('mousedown', function() {
                return false;
              }); // prevent native drag
            }
          };

          var onDestroy = function(enable) {
            toggleListeners(false);
          };

          var onDragDataChange = function(newVal, oldVal) {
            _data = newVal;
          };

          var onEnableChange = function(newVal, oldVal) {
            _dragEnabled = scope.$eval(newVal);
          };
          /*
           * When the element is clicked start the drag behaviour
           * On touch devices as a small delay so as not to prevent native window scrolling
           */
          var onpress = function(evt) {
            if (!_dragEnabled) return;
            console.log("this:",this);
            console.log("element.find(this):",element.find(this));
            scope.selDiv=this;
                  element.attr("ng-drag",false)
console.log("scope.selDiv:",scope.selDiv);
            if (true) {
              cancelPress();
              _pressTimer = setTimeout(function() {
                  
                cancelPress();
                onlongpress(evt);

              }, 100);
              //element.attr("contenteditable",true)
        
              $document.on(_moveEvents, cancelPress);
              $document.on(_releaseEvents, cancelPress);
            } else {
               element.attr("ng-drag",true)
              onlongpress(evt);
            }
          };

          var cancelPress = function() {
            clearTimeout(_pressTimer);
            $document.off(_moveEvents, cancelPress);
            $document.off(_releaseEvents, cancelPress);
          };

          var onlongpress = function(evt) {
            if (!_dragEnabled) return;
            evt.preventDefault();
            offset = element.offset();
            parentPos=element.parent().position();
            elPos=element.position();
              

            element.centerX = evt.pageX-elPos.left;
            element.centerY = evt.pageY-elPos.top;

            element.addClass('dragging');

            _mx = (evt.pageX || evt.originalEvent.touches[0].pageX);
            _my = (evt.pageY || evt.originalEvent.touches[0].pageY);
            

            _tx = _mx-element.centerX+element.parent().scrollLeft()
            _ty = _my-element.centerY+element.parent().scrollTop()
            
            moveElement(_tx, _ty);
            $document.on(_moveEvents, onmove);
            $document.on(_releaseEvents, onrelease);
            $rootScope.$broadcast('draggable:start', {
              x: _mx,
              y: _my,
              tx: _tx,
              ty: _ty,
              element: element,
              data: _data
            });

          };
          var onmove = function(evt) {
            if (!_dragEnabled) return;
            evt.preventDefault();
            _mx = (evt.pageX || evt.originalEvent.touches[0].pageX);
            _my = (evt.pageY || evt.originalEvent.touches[0].pageY);
    
            _tx = _mx-element.centerX+element.parent().scrollLeft()
            _ty = _my-element.centerY+element.parent().scrollTop()
            moveElement(_tx, _ty);

            $rootScope.$broadcast('draggable:move', {
              x: _mx,
              y: _my,
              tx: _tx,
              ty: _ty,
              element: element,
              data: _data
            });
          };

          var onrelease = function(evt) {
            if (!_dragEnabled) return;
            evt.preventDefault();
            this.contentEditable='true'

            $rootScope.$broadcast('draggable:end', {
              x: _mx,
              y: _my,
              tx: _tx,
              ty: _ty,
              element: element,
              data: _data,
              callback: onDragComplete
            });
            element.removeClass('dragging');

            //reset();
            $document.off(_moveEvents, onmove);
            $document.off(_releaseEvents, onrelease);
          };

          var onDragComplete = function(evt) {
            if (!onDragSuccessCallback) return;
            scope.htmlValue = element.parent().html();
            scope.$apply(function() {
              onDragSuccessCallback(scope, {
                $data: _data,
                $event: evt
              });
            });
          };

          var reset = function() {
            element.css({
              left: '',
              top: '',
              position: '',
              'z-index': ''
            });
          };

          var moveElement = function(x, y) {
            element.css({
              left: x,
              top: y
            });
          };

          initialize();
        }
      }
    }
  ])

  .directive('ngDrop', ['$parse', '$timeout',
    function($parse, $timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          scope.value = attrs.ngDrop;

          var _dropEnabled = false;

          var onDropCallback = $parse(attrs.ngDropSuccess); // || function(){};
          
          var initialize = function() {
            toggleListeners(true);
          };

          var toggleListeners = function(enable) {
            // remove listeners

            if (!enable) return;
            // add listeners.
            attrs.$observe("ngDrop", onEnableChange);
            scope.$on('$destroy', onDestroy);
            //scope.$watch(attrs.uiDraggable, onDraggableChange);
            scope.$on('draggable:start', onDragStart);
            scope.$on('draggable:move', onDragMove);
            scope.$on('draggable:end', onDragEnd);
          };

          var onDestroy = function(enable) {
            toggleListeners(false);
          };

          var onEnableChange = function(newVal, oldVal) {
            _dropEnabled = scope.$eval(newVal);
          };

          var onDragStart = function(evt, obj) {
            if (!_dropEnabled) return;
            isTouching(obj.x, obj.y, obj.element);
          };

          var onDragMove = function(evt, obj) {
            if (!_dropEnabled) return;
            isTouching(obj.x, obj.y, obj.element);
          };

          var onDragEnd = function(evt, obj) {
            if (!_dropEnabled) return;
            if (isTouching(obj.x, obj.y, obj.element)) {
              // call the ngDraggable element callback
              if (obj.callback) {
                obj.callback(evt);
              }

              // call the ngDrop element callback
              //   scope.$apply(function () {
              //       onDropCallback(scope, {$data: obj.data, $event: evt});
              //   });
              $timeout(function() {
                onDropCallback(scope, {
                  $data: obj.data,
                  $event: evt
                });
              });


            }
            updateDragStyles(false, obj.element);
          };

          var isTouching = function(mouseX, mouseY, dragElement) {
            var touching = hitTest(mouseX, mouseY);
            updateDragStyles(touching, dragElement);
            return touching;
          };

          var updateDragStyles = function(touching, dragElement) {
            if (touching) {
              element.addClass('drag-enter');
              dragElement.addClass('drag-over');
            } else {
              element.removeClass('drag-enter');
              dragElement.removeClass('drag-over');
            }
          };

          var hitTest = function(x, y) {
            var bounds = element.offset();
            bounds.right = bounds.left + element.outerWidth();
            bounds.bottom = bounds.top + element.outerHeight();
            return x >= bounds.left && x <= bounds.right && y <= bounds.bottom && y >= bounds.top;
          };

          initialize();
        }
      }
    }
  ])
  .directive('ngDragClone', ['$parse', '$timeout',
    function($parse, $timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var img;
          scope.clonedData = {};
          var initialize = function() {

            img = $(element.find('img'));
            element.attr('draggable', 'false');
            img.attr('draggable', 'false');
            reset();
            toggleListeners(true);
          };

          var toggleListeners = function(enable) {
            // remove listeners

            if (!enable) return;
            // add listeners.
            scope.$on('draggable:start', onDragStart);
            scope.$on('draggable:move', onDragMove);
            scope.$on('draggable:end', onDragEnd);
            preventContextMenu();
          };

          var preventContextMenu = function() {
            //  element.off('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
            img.off('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
            //  element.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
            img.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
          };

          var onDragStart = function(evt, obj) {
            scope.$apply(function() {
              scope.clonedData = obj.data;
            });
            element.css('width', obj.element.height());
            element.css('height', obj.element.height());

            moveElement(obj.tx, obj.ty);
          };

          var onDragMove = function(evt, obj) {
            moveElement(obj.tx, obj.ty);
          };

          var onDragEnd = function(evt, obj) {
            //moveElement(obj.tx,obj.ty);
            reset();
          };

          var reset = function() {
            element.css({
              left: 0,
              top: 0,
              position: 'relative',
              'z-index': -1,
              visibility: 'hidden'
            });
          };

          var moveElement = function(x, y) {
            element.css({
              left: x,
              top: y,
              position: 'relative',
              'z-index': 99999,
              visibility: 'visible'
            });
          };

          var absorbEvent_ = function(event) {
            var e = event.originalEvent;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
          };

          initialize();
        }
      }
    }
  ])
  .directive('ngPreventDrag', ['$parse', '$timeout',
    function($parse, $timeout) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var initialize = function() {

            element.attr('draggable', 'false');
            toggleListeners(true);
          };

          var toggleListeners = function(enable) {
            // remove listeners

            if (!enable) return;
            // add listeners.
            element.on('mousedown touchstart touchmove touchend touchcancel', absorbEvent_);
          };

          var absorbEvent_ = function(event) {
            var e = event.originalEvent;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
          }

          initialize();
        }
      }
    }
  ]);