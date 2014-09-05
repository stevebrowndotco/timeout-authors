'use strict';

angular.module('myApp.controller', [
    'pp.graffiti'
    ])
.controller('MainCtrl', function ($scope, graffiti) {


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

    $scope.ordered=false;

    graffiti.search().then(function(response) {
        angular.forEach(response.facets[0].children, function(val){
            $scope.groups.push(val);
            $scope.sortingLog = [];
            
            $scope.sortableOptions = {
              placeholder: "app",
              connectWith: ".apps-container"
          };
      })
    });
    $scope.oneAtATime = true;

    $scope.reorder=function(bool) {
     $scope.ordered=bool;
     console.log("$scope.ordered:",$scope.ordered);
 };

 
 $scope.logModels = function () {
    $scope.sortingLog = [];
    for (var i = 0; i < $scope.rawScreens.length; i++) {
      var logEntry = $scope.rawScreens[i].map(function (x) {
        return x.title;
    }).join(', ');
      logEntry = 'container ' + (i+1) + ': ' + logEntry;
      $scope.sortingLog.push(logEntry);
  }
};

})

.controller('GroupController', function ($scope, graffiti) {

    $scope.onClickRow = function(id) {
        graffiti.search(id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
            console.log($scope.group.content)
        })
    };

})