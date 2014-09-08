'use strict';

angular.module('myApp.controller', [
    'pp.graffiti',
    'ui.sortable',
    'ngTouch'
])
.controller('MainCtrl', function ($scope, graffiti) {
    $scope.editing=false;
    $scope.editingClick=function(bool) {
        $scope.editing=bool;
        if ( $scope.editing==false) {
           console.log("$scope.editing:",$scope.editing);
           var delIcons=angular.element.find(".delete-label")
           console.log("delIcons:",delIcons);
          /* delIcons.addClass('ng-hide')*/
        };

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

})

.controller('GroupController', function ($scope, graffiti) {
//    $scope.onClickRow = function(id) {
        graffiti.search($scope.group.id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
        })
//    };
})

