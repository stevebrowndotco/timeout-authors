'use strict';

angular.module('myApp.controller', [
    'pp.graffiti',
     'ui.sortable'
])
.controller('MainCtrl', function ($scope, graffiti) {
    $scope.ordered=false;
    $scope.reorder=function(bool) {
        $scope.ordered=bool;
        console.log("$scope.ordered:",$scope.ordered);
    };
    
    $scope.groups = [
        {
            name: 'Jaz Joyne',
            id: "node-7091",
            role: "Editor"
        },
        {
            name: 'Christina Izzo',
            id: "node-7083",
            role: "Editor"
        },
        {
            name: 'Joshua Rothkopf',
            id: "node-707",
            role: "Editor"
        }
    ];
    graffiti.search().then(function(response) {
        angular.forEach(response.facets[0].children, function(val){
            $scope.groups.push(val);
        })
    });
    $scope.oneAtATime = true;

    var tmpList = [];

    for (var i = 1; i <= 6; i++){
        tmpList.push({
          text: 'Item ' + i,
          value: i
      });
    }

    $scope.list = tmpList;
})

.controller('GroupController', function ($scope, graffiti) {
    $scope.onClickRow = function(id) {
        graffiti.search(id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
            console.log($scope.group.content)
        })
    };
})

