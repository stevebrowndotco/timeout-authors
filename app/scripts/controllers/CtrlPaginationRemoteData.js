
var CtrlPaginationRemoteData = function ($scope, $http) {
	$scope.currentPage=1;
	$scope.count = 5;
	$scope.offset = 0;
	$scope.maxSize = 5;
	$scope.bigTotalItems = 200000;//change to a hhtp request to get the real count
/*	$scope.bigCurrentPage = 	1;*/

	$http.get('/api/'+collection, {
		params: {
			count: $scope.count,
			offset:$scope.offset,
			sortby:$scope.sortby,
		}	
	}).success(function(data) {
		$scope.items= data
		$scope.docs = data;
		$scope.loading = false;    
		//$scope.totalItems = $scope.docs.length;
		console.log("$scope.totalItems: "+$scope.totalItems);

	});
	
	/*$scope.totalItems = 100;
*/



	$scope.pageChanged = function() {
		
		$http.get('/api/'+collection, {
			params: {
				count: $scope.count,
				offset:	$scope.currentPage * $scope.count
			}	
		}).success(function(data) {
			$scope.items= data
			$scope.docs = data;
			$scope.loading = false; 
			//$scope.bigCurrentPage=$scope.bigTotalItems / $scope.count;
			
			//$scope.totalItems = $scope.docs.length;
			console.log("$scope.totalItems: "+$scope.totalItems);


		});
		console.log('Page changed to: ' + $scope.currentPage);
	};

	
};