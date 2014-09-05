var CtrlInfinityPagination= function($scope,  $http) {

	$scope.items = [];
	$scope.busy = false;
	$scope.offset = 0;
	$scope.count = 100;
	$scope.sortby="-popolarity";
	$scope.asyncSelected=" ";
    $scope.counterOn=true;

	$scope.selected = undefined;//DO YOU NEEED THIS??

    // Any function returning a promise object can be used to load values asynchronously
    $scope.typeAheadSearch = function(val) {
		console.log("asyncSelected: "+$scope.asyncSelected);
    		return $http.get('/api/'+collection+"/searchTypeAhead", {
    			params: {
    				value:val,
    			} 
    		}).then(function(data){

    			var typeAheadSearch = [];
    			angular.forEach(data.data, function(item){
    				typeAheadSearch.push(item.name);
    			});

    			return typeAheadSearch;

    		});



    	
    };

    $scope.countAllItems = function(val) {
			console.log("counting: ");
    		$http.get('/api/'+collection+"count", {
    			params: {
    				value:val
    			} 
    		}).success(function(itemsCount) {
    			return $scope.itemsCount=itemsCount;
    			console.log("counting finished: ");
    		});

    };



    $scope.search = function(val) {

    	if ($scope.busy===false) {
    		$scope.busy = true;
    		if (val===""){ val=" "}
    		$scope.items=[];
    		console.log("val: "+val);
    		$scope.countAllItems(val);
    		return $http.get('/api/'+collection+"/search", {
    			params: {
    				value:  val,
    				count:  $scope.count,
    				offset: $scope.offset,
    				sortby: $scope.sortby,
    			} 
    		}).success(function(data){



    			var items = data;
    			for (var i = 0; i < items.length; i++) {
    				$scope.items.push(items[i]);
    			}
    			$scope.offset = $scope.offset+$scope.count;
    			console.log("$scope.items.length: "+$scope.items.length);

    			$scope.busy = false;

    		});

    	};
    	
    };
    $scope.update = function(val) {
    	if ($scope.busy===false) {
    		$scope.busy = true;
    		console.log("val: "+val);
            if ($scope.counterOn){
                            $scope.countAllItems(val);
                     $scope.counterOn=false;       
            };
			
    		return $http.get('/api/'+collection+"/search", {
    			params: {
    				value:  val,
    				count:  $scope.count,
    				offset: $scope.offset,
    				sortby: $scope.sortby,
    			} 
    		}).success(function(data){



    			var items = data;
    			for (var i = 0; i < items.length; i++) {
    				$scope.items.push(items[i]);
    			}
    			console.log("$scope.items.length updated: "+$scope.items.length);
    			$scope.offset = $scope.offset+$scope.count;
    			$scope.busy = false;

    		});
    	};
    	
    };

    $scope.sorting=function(val) {
    	if ($scope.busy===false) {
    		if ($scope.sortby==="-popolarity"){
    			$scope.sortby="popolarity";
    			$scope.items=[];
    			$scope.update(val);
    		}else{
    			$scope.sortby="-popolarity";
    			$scope.items=[];
    			$scope.update(val); 
    		}
    	}

    };
};