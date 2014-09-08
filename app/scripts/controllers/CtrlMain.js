'use strict';

angular.module('myApp.controller', [
    'pp.graffiti',
    'ui.sortable',
    'ngTouch'
])
.controller('MainCtrl', function ($scope, graffiti) {
    $scope.hideTrash=false;

    $scope.sortableOptions = {
        axis: 'y'
    };

    $scope.showActionsSwipe=function(bool,groupId) {
        if (bool){
            $scope.groupId=groupId
            $scope.showActions=true;
        }else{
             $scope.showActions=false;
        }
    };

    $scope.editing=false;

    $scope.editingClick=function(bool) {
        $scope.editing=bool;

        $scope.showActions=false;
        if ( $scope.showActions==true) {

            console.log("$scope.hideTrash:",$scope.hideTrash);


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
            image: "jaz.jpeg",
            category: 'Things to Do'
        },
        {
            name: 'Christina Izzo',
            id: "node-7083",
            role: "Editor",
            category: 'Food & Drink',
            image: "christina.jpeg"
        },
        {
            name: 'Joshua Rothkopf',
            id: "node-7073",
            role: "Editor",
            category: 'Film',
            image: "josh.jpeg"
        },
        {
            name: 'Giulio De Luise',
            id: 'node-7079',
            image: 'giulio.jpg',
            category: 'Music'
        },
        {
            name: 'Jaclyn Bradshaw',
            id: 'node-7089',
            category: 'Theatre',
            image: 'jaclyn.jpg'
        },
        {
            name: 'Teo Danciu',
            id: 'node-7093',
            category: 'Travel',
            image: 'teo.png'
        },
        {
            name: 'Tadas Sasnauskas',
            id: 'node-7065',
            category: 'Restaurants',
            image: 'tadas.jpg'
        }
    ];

//        $scope.cats = []
//
//        graffiti.search().then(function (response) {
//            angular.forEach(response.facets[0].children, function (val) {
//                $scope.cats.push(val);
//            })
//            console.log(JSON.stringify($scope.cats));
//        });



    })

.controller('GroupController', function ($scope, graffiti) {
        graffiti.search($scope.group.id, null, 'posted-at-date', 'en-GB').then(function(response) {
            $scope.group.content = response.body;
        })
})

