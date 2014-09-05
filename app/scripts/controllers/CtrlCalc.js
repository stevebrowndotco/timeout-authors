myApp.controller('CtrlCalc', function($scope) {
	$scope.somethingisNumber= false;
	$scope.doSomething= function(formData) {
		$scope.somethingisNumber= false;
		$scope.loading = true;
		if (angular.isNumber){
			$http.post('/api/doSomethingNow',$scope.formData).success(function(data) {
				$scope.loading = false;
				$scope.formData = {};
				$scope.msg = data;
			});
			$scope.somethingisNumber= true;
		}

		
	};
});