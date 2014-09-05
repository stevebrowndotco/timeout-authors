'use strict';

angular.module('myApp.controller', [
    'pp.graffiti'
])
.controller('MainCtrl', function ($scope, graffiti) {

    graffiti.search().then(function(response) {
        $scope.groups = response.facets[0].children;
    })

    $scope.oneAtATime = true;

})
.controller('GroupController', function ($scope, graffiti) {
        $scope.onClickRow = function(id) {
            graffiti.search(id, null, 'posted-at-date').then(function(response) {
                $scope.group.content = response.body;
                console.log($scope.group.content)
            })
        };
})