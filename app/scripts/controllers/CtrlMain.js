'use strict';

angular.module('myApp.controller', [
    'pp.graffiti'
])
.controller('MainCtrl', function ($scope, graffiti) {
    graffiti.topVenues().then(function(resp){

        $scope.venues = resp.body;
        console.log($scope.venues)
    })
});
