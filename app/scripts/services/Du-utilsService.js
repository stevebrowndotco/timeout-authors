
angular
.module('du-utils', [])
.constant('MODULE_VERSION', '0.0.1')
.service('du', function(){
     this.print= function(obj, label, callback) {
      var output = JSON.stringify(obj, null, '\t')
      var label=label;
      if (label){
        console.log( label+": " + output);
      }else{
        console.log("output: " + output);
      }

      if (obj) {
        if (callback) {
          callback(null, obj);
        } else {
          return obj;
        }
      } else {
        return;
      }
    }
});

angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});