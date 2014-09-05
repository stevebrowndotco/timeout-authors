'use strict';
angular.module('myApp')
.controller('ViewCtrl', function($scope, ViewsService, CollsService, DocsService,$log,$upload, $http, $sce,$window, $modal,$location, $routeParams, $rootScope, _ ,  du) {
	



	$scope.$log = $log;
	$scope.showFieldsList=[];
	$scope.status={};
	$scope.status.accordionViewOpen= true;
	$scope.status.accordionViewDetailsOpen=false;
	$scope.status.accordionCollOpen= false;
	$scope.status.accordionColumsOpen= false;
	$scope.status.accordionFiltersOpen= false;

	$scope.docs = [];
	$scope.docsTable="";

	$scope.status.accordionToolsOpen= false;
	$scope.view={};
	$scope.view.fields=[];
	$scope.newView={};
	$scope.showFields=false;
	$scope.showView=false;
	$scope.showFilters=false;
	$scope.showTools=false;
	$scope.showColl=false;
	$scope.showCreateView=false;
	$scope.showItems=false;
	$scope.showAs='';
	$scope.editModeViewColls=false;//to remove colls from the view
	$scope.editViewsListMode=false;
	$scope.editViewMode=false;
	$scope.editModeViewColl=false//edit mode to change how field are shown
	$scope.colls = [];
	$scope.fields = [];
	$scope.collectionReady = false;
	$scope.view.celHeight=25;
	$scope.view.headerHeight=25;
	$scope.items = [];
	$scope.busy = true;
	$scope.viewHasChanged=false;
	$scope.fieldsExist=false;

	$scope.views=[];
	$scope.editViewId="";

	$scope.currentPage=1;

	$scope.offset = 0;
	$scope.maxSize = 5;


	$scope.updateViewsList = function() {

		ViewsService.query(function(views) {
			$scope.views = views;
		});
	};

	$scope.createViewSubmit = function(newView) {

		var view = new ViewsService({
			name: newView.name,
			description: newView.description
		});

		view.$save(function(response) {
			$scope.showCreateView=false;

			$scope.newView={};

			$scope.updateViewsList();

		});
	};

	$scope.showCreateViewToggle=function(mode) {
		$scope.showCreateView=mode;
	};

	$scope.findOneView=function() {
		ViewsService.get({

			viewId: $routeParams.viewId
		}, function(view) {
			console.log("view:",view);
			$scope.showFieldsList=[];
			$scope.docs = [];
			$scope.docsTable="";
			
			$scope.status.accordionViewOpen=false;

			$scope.view = view;

			$scope.dateCreated= new Date($scope.view.created).toString();

			if ( $scope.view.creator._id === $rootScope.currentUser._id ) {
				$scope.showView=true;
				$scope.status.accordionViewOpen= true;
				$scope.status.accordionViewDetailsOpen=true;

				if ($scope.view.collections.length>0) {

					 
				
					var collections=$scope.view.collections;
				
					for ( var i in collections){
						var i;
						console.log("i:",i);
						var coll=collections[i]
						CollsService.get({
							collId: coll._id
						}, function(coll) {
							if(coll){
								$scope.showFieldsList=[];
								console.log("coll:",coll);
								var type=$scope.view.collections[i].type;
								coll.type=type;
								$scope.view.collections[i]=coll;
								var fields=$scope.view.fieldsList
								console.log("fields:",fields);
								for (var e in fields){
									if (fields[e].checked) {

										$scope.showFieldsList.push(fields[e])
									};
								}
								console.log("$scope.showFieldsList:",$scope.showFieldsList);
								$scope.editAllowed=true;
								
								$scope.status.accordionViewDetailsOpen=true;
								$scope.status.accordionCollOpen=true;
								var collectionsCount=$scope.view.collections.length;
								$scope.showItems=true;
								$scope.updateViewDetails();
							}
						},function(coll) {
							//handel errors ie the collection attached to the view has been deleted.


							var msg=$sce.trustAsHtml("<p>Error: Failed to load collection: <b class='L-font'>"+coll.name+ "</b></p> <p>The collection could have been deleted</p> ");
		
							$scope.view.collections[$scope.i].err={
							
								msg:msg
							};
							
							var fieldsList=[];
							
							var i 
							
							for (var i in $scope.view.fieldsList)
								
							if($scope.view.fieldsList[$scope.i].coll!=coll._id){
								fieldsList.push($scope.view.fieldsList[$scope.i])
							}
					
							$scope.view.fieldsList=fieldsList;
						

							var fields=$scope.view.fieldsList
							
							for (var e in fields){
								if (fields[e].checked) {

									$scope.showFieldsList.push(fields[e])
								};
							}
							
							$scope.editAllowed=true;
							
							$scope.status.accordionViewDetailsOpen=true;
							$scope.status.accordionCollOpen=true;
							var collectionsCount=$scope.view.collections.length;
							$scope.showItems=true;
							
						});
					}

				}else{
					$scope.showItems=false;
				};

			};
		});
	};

	$scope.editViewsList =function(mode) {
		$scope.editViewsListMode=mode;
	};



	//view settings
	$scope.docsPerPageDisplay="Select";
	$scope.setDocsPerPage=function(docsPerPage) {
		if (docsPerPage>0){
			$scope.view.docsPerPage=docsPerPage;


			$scope.updateViewDetails();
			$scope.docsPerPageDisplay=docsPerPage;

		}else{
			if(docsPerPage==0){

				$scope.view.docsPerPage=$scope.docsCount;
				$scope.updateViewDetails(); 
				$scope.docsPerPageDisplay="All";
			}
			if (docsPerPage==-1) {
				$scope.docsPerPageDisplay=docsPerPage;
				$scope.showCustomDocsPerPageSet=true;
			};
		}

	};
	$scope.editView=function(viewId) {
		$scope.editViewId=viewId;
		$scope.editViewMode=true;
	};
	$scope.editViewCollFields=function(fieldId,editMode) {
		$scope.fieldViewCollEditModeId=fieldId;
		if (editMode) {
			$scope.editModeViewColl=true;
			for (var i in $scope.view.fieldsList){
				if($scope.view.fieldsList[i]._id==fieldId){
					$scope.showAs=$scope.view.fieldsList[i].showAs;
				}
			}
			$scope.showAs=
			$scope.viewHasChanged=true;
		}else{
			$scope.editModeViewColl=false;
			for (var i in $scope.view.fieldsList){
				if($scope.view.fieldsList[i]._id==fieldId){
					$scope.view.fieldsList[i].showAs=$scope.showAs;
				}
			}
		}
		
	};

	$scope.updateView=function(viewId) {

		$scope.editViewMode=false;
	};

	$scope.cancelUpdateView=function() {

		$scope.editViewMode=false
	};

	$scope.showCreateViewPanel=function(mode) {
		$scope.showCreateView=mode;
	};

	$scope.editModeViewCollsCall=function(mode) {
		$scope.editModeViewColls =mode;
		$scope.viewHasChanged=true;
	};

	$scope.removeCollection=function(coll_id) {
		console.log("removeCollection:______");
		console.log("coll_id:",coll_id);
		var collections=$scope.view.collections;
		var colls=[]
		for (var i in $scope.view.collections) {
			console.log("$scope.view.collections[i]._id :",$scope.view.collections[i]._id );
			if ($scope.view.collections[i]._id != coll_id) {
				colls.push($scope.view.collections[i])
			}
		}
		$scope.view.collections=colls;
		var fieldsList=[];
		for (var i in $scope.view.fieldsList){
			if ($scope.view.fieldsList[i].coll==coll_id){

			}else{
				fieldsList.push($scope.view.fieldsList[i]);
			};
		}
		$scope.view.fieldsList=fieldsList;
		var showFieldsList=[];
		for (var i in $scope.showFieldsList){
			if ($scope.showFieldsList[i].coll==coll_id){

			}else{
				showFieldsList.push($scope.showFieldsList[i]);
			};
		}
		$scope.showFieldsList=showFieldsList;


		

		if ($scope.view.collections.length>0) {
				$scope.showItems=true;
				$scope.updateViewDetails();
		}else{
			$scope.showItems=false;
		};
	};

	$scope.fieldVisible=function(fieldId,coll) {

		var fieldIds=[];

		for (var i in $scope.showFieldsList){
			var fid=$scope.showFieldsList[i].id;
			fieldIds.push(fid)
		}

		//index of the selected field in the showFieldsList
		var indexf=  fieldIds.indexOf(fieldId)  ;
		
		var viewFieldIds=[];//collect all the field Ids in the view field list
		
			for (var i in $scope.view.fieldsList){
				if ($scope.view.fieldsList[i]!=null){
					var fid= $scope.view.fieldsList[i].id;
					viewFieldIds.push(fid)	
				
				}
			}
			console.log("fieldId:",fieldId);

			console.log("viewFieldIds:",viewFieldIds);
			if (viewFieldIds.length>0) {

				var iViewField=viewFieldIds.indexOf(fieldId)//find the index of the field to be added to the show field list

		
				// if it is not in the list then find the field in the view fieldlist and add it to showFieldsList
				if (indexf == -1){
					console.log("iViewField:",iViewField);
				console.log("$scope.view.fieldsList:",$scope.view.fieldsList);
					$scope.view.fieldsList[iViewField].checked=true;
					$scope.showFieldsList.push($scope.view.fieldsList[iViewField]) 


				}else{

					$scope.view.fieldsList[iViewField].checked=false;
					$scope.showFieldsList.splice(indexf,1)
				}
				//get the name of the collection by the ID

				$scope.viewHasChanged=true;

				$scope.updateViewDetails() ;
			}
		};
	

	$scope.saveView=function(celHeight,headerHeight) {
		console.log("$scope.view:",$scope.view);
		var view= $scope.view;
		$scope.view.celHeight=celHeight;
		$scope.view.headerHeight=headerHeight;

		view.$update(function(view) {
			$scope.view=view;
			$scope.editModeViewColls=false;
			$scope.updateViewDetails();
			$scope.viewHasChanged=false;
		})
	};

	$scope.updateViewDetails=function() {
		console.log("$scope.view.collections:",$scope.view.collections);
		for(var i in $scope.view.collections){
			var coll=$scope.view.collections[i]
			console.log("coll.type:",coll.type);
			if (coll.type=="main") {
				console.log("collId:",collId);
				var collId=coll._id;
				$scope.getDocs(collId)	
			};
			
			//$scope.getDocs(coll,i,collectionsCount)
		}
	};

	$scope.getDocs=function(collId) {
		console.log("collId:",collId);
		DocsService.get({
			coll: collId,
			limit:$scope.view.docsPerPage,
			skip:$scope.offset
		},function(_docs) {
			console.log("_docs:",_docs);
			var docs=_docs.docs
			$scope.docs=[];
			for (var i in docs){
				$scope.docs.push(docs[i].doc);

			}

		});

		DocsService.get({
			coll: collId,
			count:true
		},function(_count){   
			$scope.docsCount=_count.docsCount
			$scope.numPages=Math.floor($scope.docsCount/$scope.view.docsPerPage)+1

			$scope.bigTotalItems=$scope.docsCount

			var tw=angular.element('#docsTable').width();
			var fc=$scope.showFieldsList.length;
			var iw=50;
			var x=(tw-iw)/fc;
			var h=(($scope.view.celHeight*($scope.view.docsPerPage))+$scope.view.headerHeight)
			$scope.colIndex={'width': iw+'px', 'height':h+'px'};
			$scope.colField={'width':x+'px','height':h+'px'};
			$scope.tableCel={'height':$scope.view.celHeight+'px'}
			$scope.tableHeader={'height':$scope.view.headerHeight+'px'}
		}
		);
	};

	$(window).resize(function(){


		$scope.$apply(function(){
			var tw=angular.element('#docsTable').width();
			var fc=$scope.showFieldsList.length;
			var iw=50;
			var x=(tw-iw)/fc;
			$scope.colIndex={'width': iw+'px'};
			$scope.colField={'width':x+'px'};});
	});

	$scope.pageChanged = function(page) {


		$scope.offset =  (page-1)* $scope.view.docsPerPage;
		$scope.maxSize = 5;
		$scope.updateViewDetails();
	};

	$scope.submitDoc=function(value) {

		var newdoc={};

		//$scope.view.fields=[];
		var colls= $scope.view.collections;
		for (var i in colls){

			if(colls[i].type=="main"){
				var newdoc={};
				newdoc.doc={};
				var fields= $scope.view.fieldsList;
				console.log("fields:",fields);
				newdoc.coll=colls[i]._id;
				for(var e in fields){
					console.log("key:",key);
					console.log("fields[e].value:",fields[e].value);
					var key=fields[e].name;
					newdoc.doc[key]=fields[e].value;  

				}

				var doc = new DocsService(newdoc);
				doc.$save(function(doc) {
					for (var i in $scope.view.fieldsList){
						 $scope.view.fieldsList[i].value="";
					}
					$scope.updateViewDetails();
				});
			}
			

		}
		for (var i in colls){
			if (colls[i]) {
				for( var e in colls[i].fields ){

					$scope.view.collections[i].fields[e].value="";
					console.log("$scope.view.collections[i].fields[e].value:",$scope.view.collections[i].fields[e].value);
				}
			};
			
		} 
	};

	$scope.deleteView = function (view) {
		view.$remove(function(err) {
			$scope.updateViewsList();
			if ($scope.views.length<=1){
				$scope.editViewsListMode=false;
			}
		});
	};

	$scope.deleteAllView =function(mode) {
	

		ViewsService.deleteAll({
			},function(_colls) {
			})
			$scope.updateViewsList();
			$scope.editViewsListMode=false;

	};
















	//__________________MODAL addCollection________________//
	$scope.addCollection = function (size,type) {

		var modalInstance = $modal.open({
			backdrop:'static',
			templateUrl: 'partials/applications/admin/modals/addCollectionModal.html',
			controller: addCollectionCtrl,
			size: size,
		
			resolve: {
				type:  function () {
					return type;
				},
				coll: function () {
					return $scope.coll;
				},
				status:function() {
					return $scope.status

				},
				viewColls:function() {
					return	$scope.view.collections;
				}
			}
		});

		modalInstance.result.then(function (coll,status) {
			//modal 
			$scope.status;
			coll.type=type;
			$scope.coll=coll;

			var fields= coll.fields;
			
			for (var i in fields){
				var o={
						'id':fields[i]._id,
						'name':fields[i].name,
						'checked':false,
						'coll':coll._id,
						'showAs':fields[i].name
				}
				$scope.view.fieldsList.push(o);
				
			}

			$scope.view.collections.push(coll);

			$scope.showItems=true;
			$scope.getDocs(coll._id)

			$scope.viewHasChanged=true;
			if($scope.showColl===false){$scope.showColl=true};
			if($scope.status.accordionCollOpen===false){$scope.status.accordionCollOpen=true};  

		}, function () {
			//modal dismissed
			$scope.findOneView();
			//$log.info('Modal dismissed at: ' + new Date());
		});
	};

	var addCollectionCtrl = function ($scope, $modalInstance, viewColls, coll, status, type, CollsService) {
		$scope.status={};
console.log("viewColls:",viewColls);
		$scope.updatePanelConfig= function() {
			console.log("updatePanelConfig: ");

			if ($scope.colls) {
				if($scope.colls.length>0){
					$scope.status.accordionNewCollOpen=false;
					$scope.status.accordionExistingCollOpen=true;	
				}else{
					
					$scope.status.accordionExistingCollOpen=false;
					$scope.status.accordionNewCollOpen=true;		
				}
			};
		
		};

		
		$scope.updateColls=function(updatePanelOpen) {   //get the list of collections from the server

			CollsService.query(function(collsFound) {
			
				var collIds=_.pluck(collsFound, '_id');
				console.log("collIds:",collIds);
				//check the the collection is already in the view.
				console.log("viewColls:",viewColls);
				var ViewCollIds=_.pluck(viewColls, '_id');
				console.log("ViewCollIds:",ViewCollIds);
				var collToShow=_.difference(collIds,ViewCollIds)

$scope.colls=[];

				console.log("collToShow:",collToShow);
				for (var i in collsFound){
					if (_.contains(collToShow,collsFound[i]._id)){
						$scope.colls.push(collsFound[i])
					}
				}




				if ( updatePanelOpen) {
					$scope.updatePanelConfig();
				};
				
			});
		};




		
		if ($rootScope.currentUser) {
					var roles= $rootScope.currentUser.roles
					if (roles.indexOf("administrator") > -1) {
						$scope.debugging=true;



			}
		};
		$scope.msgSuccessColls=[];
		$scope.updateColls(true);



		$scope.admin=_.contains($rootScope.currentUser.roles, "administrator") ;







		//existing collections



		$scope.editCollsMode=false;
		$scope.delCollMode=false;





		$scope.editColls=function(edit) {
			if (edit) {
				$scope.editCollsMode=true;       
			}else{
				$scope.editCollsMode=false;  
			};
			
		};

		$scope.delCollConfirm=function(coll_Id) {
			$scope.delCollMode=true;
			$scope.delCollId=coll_Id;
		};


		$scope.delColl=function(coll) {
			coll.$remove()

			for (var i in $scope.colls) {
				if ($scope.colls[i] == coll) {
					$scope.colls.splice(i, 1);
				}
			}
			$scope.delCollMode=false;
			$scope.updateColls();
		};

		$scope.cancelDelColl=function() {
			$scope.delCollMode=false;
		};

		$scope.delAllCollConfirm=function() {
			console.log("delAllCollConfirm: ");
		
			CollsService.deleteAll({

			},function(_colls) {
				$scope.delAllCollMode=false;
				$scope.updateColls()
			})
			
			

		};

		$scope.addColl = function (coll_id) {
			CollsService.get({
				collId: coll_id
			}, function(coll) {
					$modalInstance.close(coll);//send back the coll obj to the main page
				});
		};









		//new collection
		$scope.newColl={}

		$scope.isInvalid = function(newColl) {
			var isInvalid=false;
			var colls=$scope.colls
			var cNames=[];
			if(newColl.name) {
				$scope.msgAlertCollNames=[];
				for ( var i in colls){
					cNames.push(colls[i].name)
				}
				var ci = cNames.indexOf(newColl.name)
				

				if (newColl.name.match(/^system\b|objectlabs-system\b/)) {
					$scope.msgAlertCollNames.push("'system' and 'objectlabs-system' are not allowed as names.");
					isInvalid=true;
				};
				if (newColl.name.length>20) {
					$scope.msgAlertCollNames.push("Max 20 characters");
					isInvalid=true;
				}
				if (newColl.name.length<5) {
					$scope.msgAlertCollNames.push("Min 5 characters");
					isInvalid=true;
				}
				if (!newColl.name.match(/^[a-zA-Z_\-\s[0-9]*$/)) {//can start with letters and after can use number and _ and -

					$scope.msgAlertCollNames.push("Only letters numbers, undescores and hyphens are allowed");
					isInvalid=true;
				} 
				if(newColl.name.match(/^[0-9_\-]/)){
					$scope.msgAlertCollNames.push("Must start with a letter");
					isInvalid=true;
				};
				if(newColl.name.match(/\s/g)){
					$scope.msgAlertCollNames.push("White spaces are NOT allowed");
					isInvalid=true;
				}
				if (ci>-1 && newColl.name!=undefined) {
					$scope.msgAlertCollNames.push("Collection exists already");
					isInvalid=true;
				}
			}
			if (isInvalid){

				return true
			}else{
				return false

			};
		};

		$scope.saveColl = function() {
			$scope.collSaved=false;
			var coll = new CollsService({
				name: $scope.newColl.name
			});
			coll.$save(function(response) {
				$scope.coll=response;
				$scope.collSaved=true;
			$scope.updateColls(false);
				$scope.msgSuccessColls.push("The Collection has been Saved, Please add fields");
			
			});

		};

		$scope.updateColl=function() {};

		//new collection fields
		$scope.newCollFields = [];
		$scope.newCollFieldCounter= $scope.newCollFields.length;
		$scope.newCollFieldErrNameMsgs=[];
		$scope.newCollFieldErrTypeMsgs=[];
		$scope.newCollFieldEdit=false;

		$scope.countFields=function() {
			if($scope.newCollFields.length>0){
				return true;
			}else{
				return false;
			}
		};

		$scope.fieldTypes=[
		"String",
		"Number",
		"Date",
		"Boolean",
		"List",
		"Ref"
		];
		$scope.newCollField={};

		$scope.selType =function(type) {
			$scope.newCollField.type=type;
		};

		$scope.isFieldInvalid=function() {
			$scope.newCollFieldAlertMsgs=[];
			var isInvalid=false;
			var name=$scope.newCollField.name;

			var fields=$scope.newCollFields;
			var names=[];

			if(name) {

				for ( var i in fields){
					names.push(fields[i].name)
				};
				var iName = names.indexOf(name);
				if (iName>-1 && name!=undefined) {
					if ($scope.newCollFieldEdit) {
						names.splice(iName,1);
						var iName = names.indexOf(name);
						if (iName>-1){
							$scope.newCollFieldAlertMsgs.push("Field Name exists already");
							isInvalid=true; 
						}
					}else{
						$scope.newCollFieldAlertMsgs.push("Field Name exists already");
						isInvalid=true;    
					}

				};
				if (name.match(/^[_\-]/)) {
					$scope.newCollFieldAlertMsgs.push("Field Name can NOT start with underscore or hyphens");
					isInvalid=true;
				};
				if(name.match(/\s/g)){
					$scope.newCollFieldAlertMsgs.push("White spaces are NOT allowed, Please use underscore instead");
					isInvalid=true;
				};
				if (name.length>20) {
					$scope.newCollFieldAlertMsgs.push("Max 20 characters");
					isInvalid=true;
				};
				if (name.length<1) {
					$scope.newCollFieldAlertMsgs.push("Min 1 characters");
					isInvalid=true;
				};
				if (name===""){
					isInvalid=undefined;
				}

			};

			if (isInvalid===true){

				return true
			}
			if (isInvalid===false){
				return false

			};

		};

		$scope.isFieldTypeInvalid=function() {
			var isInvalid=false;
			var fieldNameIsValid=$scope.isFieldInvalid();

			if( !fieldNameIsValid){
				var type=$scope.newCollField.type;
				if (!type) {
					$scope.newCollFieldAlertMsgs.push("Please Select a type");
					isInvalid=true;
				}
			}
			if (isInvalid===true){

				return true
			}
			if (isInvalid===false){
				return false

			};
		} 

		$scope.checkField=function() {
			var n=$scope.newCollField.name;

			var names=[];
			//check if the field name entered is unique
			for (var e in $scope.newCollfields){
				names.push($scope.newCollfields[e].name);
			}
			var i=names.indexOf(n);

			var err=false;
			if (i >-1) {
				$scope.newCollFieldErrNameMsgs.push("Name is a duplicate, Please enter a unique name")
				err=true;
			};
			if (n===""){ 
				$scope.newCollFieldErrNameMsgs.push("Please enter the name of the field");
				err=true;
			}
			if ($scope.newCollField.type==="Select"){
				$scope.newCollFieldErrTypeMsgs.push("Please select a Type");
				err=true;
			}
			return err;
		};

		$scope.addField = function () {
			var err =$scope.checkField();
			if (err){
				return
			}else{
				$scope.coll.fields.push($scope.newCollField);
				var coll=$scope.coll;
				coll.$update(function(coll) {
					$scope.coll=coll;
				})
				$scope.newCollField={};
			}; 
			return
		};

		$scope.editField=function(newCollField){
			$scope.newCollFieldEditing=newCollField;
			$scope.newCollFieldEdit=true
			$scope.newCollField=newCollField;
			
		}
		$scope.updateField=function() {


			var id= $scope.newCollField.id;
			var ids=[]
			for (var i in $scope.newCollFields){
				ids.push( $scope.newCollFields[i].id);


			}
			var index=ids.indexOf(id);

			$scope.newCollFields[index]=$scope.newCollField;
			$scope.newCollFieldEdit=false;
			$scope.newCollField={};
		};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};

		//debugging

		if ($rootScope.currentUser) {

		};

	};//END ADD COLLECTION CONTROLL

	//__________________END MODAL________________//







	






	//debug

	if ($rootScope.currentUser) {
		var roles= $rootScope.currentUser.roles
		if (roles.indexOf("administrator") > -1) {
			$scope.debugging=true;



		}
	};

})


//

