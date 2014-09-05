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
    graffiti.search().then(function(response) {
        angular.forEach(response.facets[0].children, function(val){
            $scope.groups.push(val);
        })
    });
    $scope.oneAtATime = true;
})

.controller('GroupController', function ($scope, graffiti) {
    $scope.onClickRow = function(id) {
        graffiti.search(id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
            console.log($scope.group.content)
        })
    };
})