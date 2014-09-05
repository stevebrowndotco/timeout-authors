'use strict';

angular.module('myApp.controller', [
	'pp.graffiti'
	])
.controller('MainCtrl', function ($scope, graffiti) {
	$scope.ordered=false;
	graffiti.search().then(function(response) {
		$scope.groups = response.facets[0].children;
	})

	$scope.oneAtATime = true;
	$scope.reorder=function(bool) {
		$scope.ordered=bool;
		console.log("$scope.ordered:",$scope.ordered);
	};
	$scope.sortingLog = [];

	$scope.sortableOptions = {
		stop: function(e, ui) {
			for (var index in $scope.groups) {
				$scope.groups[index].i = index;
				console.log("g$scope.groups[index].name:",$scope.groups[index].name);
				console.log("$scope.groups[index].i:",$scope.groups[index].i);
			}

			
		}
	};

	
})
.controller('GroupController', function ($scope, graffiti) {

	$scope.onClickRow = function(id) {
		graffiti.search(id, null, 'posted-at-date').then(function(response) {
			$scope.group.content = response.body;
			console.log($scope.group.content)
		})
	};

})