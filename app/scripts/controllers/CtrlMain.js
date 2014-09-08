'use strict';

angular.module('myApp.controller', [
    'pp.graffiti',
    'ui.sortable',
    'ngTouch'
])
.controller('MainCtrl', function ($scope, graffiti) {

    $scope.sortableOptions = {
        axis: 'y'
    };
    
    $scope.editing=false;

    $scope.editingClick=function(bool) {
        $scope.editing=bool;
         $scope.showActions=false;
        if ( $scope.editing==false) {
          
           var delIcons=angular.element.find(".delete-label")
           
          /* delIcons.addClass('ng-hide')*/
        };
        console.log("$scope:",$scope);
    };
    
    $scope.delete=function(index) {
        $scope.groups.splice(index, 1);
    };






    $scope.groups = [
        {
            name: 'Jaz Joyne',
            id: "node-7091",
            role: "Editor",
            image: "jaz.jpeg"
        },
        {
            name: 'Christina Izzo',
            id: "node-7083",
            role: "Editor",
            image: "christina.jpeg"
        },
        {
            name: 'Joshua Rothkopf',
            id: "node-707",
            role: "Editor",
            image: "josh.jpeg"
        },
        {
            name: 'Giulio De Luise',
            id: 'node-7079',
            image: 'giulio.jpg'
        },
        {
            name: 'Jaclyn Bradshaw',
            id: 'node-7089',
            image: 'jaclyn.jpg'
        },
        {
            name: 'Teo Danciu',
            id: 'node-7091',
            image: 'teo.jpg'
        },
        {
            name: 'Tadas Sasnauskas',
            id: 'node-7065',
            image: 'tadas.jpg'
        }
    ];
//    graffiti.search().then(function(response) {
//        angular.forEach(response.facets[0].children, function(val){
//            console.log(val);
//            $scope.groups.push(val);
//        })
//    });

})

.controller('GroupController', function ($scope, graffiti) {
        graffiti.search($scope.group.id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
        })
})

