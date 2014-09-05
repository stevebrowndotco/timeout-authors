var CtrlSortable = function($scope,$http) {
	$scope.currentPage=1;
	$scope.count = 5;
	$scope.offset = 0;
	$scope.maxSize = 5;
	$scope.ne ='N/A' ;
	$scope.where="popolarity";
	$scope.sortby="popolarity";
	$scope.bigTotalItems = 200000;//change to a hhtp request to get the real count


	$http.get('/api/'+collection, {
		params: {
			count: $scope.count,
			offset:$scope.offset,
			ne:$scope.ne,
			where:$scope.where,
			sortby:$scope.sortby,
		}	
	}).success(function(data) {
		$scope.items= data;
		$scope.loading = false;   
		
	
		print($scope.items);
		var tmpList = [];

		for (var i = 0; i < $scope.items.length; i++){
			tmpList.push({
				name: $scope.items[i].name,
				popolarity: $scope.items[i].popolarity,
				value: i
			});
		}

		$scope.list = tmpList;


		$scope.sortingLog = [];

		$scope.sortableOptions = {
		/*	activate: function() {
				console.log("activate");
			},
			beforeStop: function() {
				console.log("beforeStop");
			},
			change: function() {
				console.log("change");
			},
			create: function() {
				console.log("create");
			},
			deactivate: function() {
				console.log("deactivate");
			},
			out: function() {
				console.log("out");
			},
			over: function() {
				console.log("over");
			},
			receive: function() {
				console.log("receive");
			},
			remove: function() {
				console.log("remove");
			},
			sort: function() {
				console.log("sort");
			},
			start: function() {
				console.log("start");
			},*/
			update: function(e, ui) {
				console.log("update");
				if (ui.item.scope().item == "can't be moved") {
					ui.item.sortable.cancel();
				}
				var logEntry = tmpList.map(function(i){
					return i.value;
				}).join(', ');
				$scope.sortingLog.push('Update: ' + logEntry);
			},
			stop: function(e, ui) {
				console.log("stop");

				// this callback has the changed model
				var logEntry = tmpList.map(function(i){
					return i.value;
				}).join(', ');
			$scope.sortingLog.push('Stop: ' + logEntry);
			}
		}
	});
};