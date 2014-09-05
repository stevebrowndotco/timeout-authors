'use strict';

angular.module('myApp')
  .controller('NavbarCtrl', function ($scope, $rootScope, Auth, $location,_) {
    $rootScope.navCollapsed=true;
    console.log("$rootScope:",$rootScope);
     if ($location.$$url=="/"||$location.$$url=="") {
        $scope.home=true;
      }else{
        $scope.home=false;
      }
    $scope.$on('$routeChangeStart',function (event, next, current){
        if ($location.$$url=="/"||$location.$$url=="") {
        $scope.home=true;
      }else{
        $scope.home=false;
      }
    });
/*    $location.$watch('$location',function() {
      console.log("$location.$$url:",$location.$$url);
      if ($location.$$url=="/"||$location.$$url=="") {
        $scope.home=true;
      }else{
        $scope.home=false;
      }
    })*/
    

    $scope.menu = [
    {
      "title": "Views",
      "link": "views",

    },
    {
      "title": "Blogs",
      "link": "blogs"
    }];
    $scope.showMenuItem=  false;
    
    $scope.collapseFn= function() {
      console.log("collapseFn:");
      $scope.collapse=!$scope.collapse;
      console.log("$scope.collapse:",$scope.collapse);
      //$scope.collapse=$rootScope.navCollapsed;

    };
    $rootScope.$watch('navCollapsed',  function() {
       
         $scope.collapse=$rootScope.navCollapsed;
        
    });

    $scope.$watch('collapse',  function() {
       
        $rootScope.navCollapsed= $scope.collapse;
        

    });
    $rootScope.$watch('currentUser',  function() {

      if ( $rootScope.currentUser) {

        var userRoles= $rootScope.currentUser.roles;
        if(_.contains(userRoles,"administrator")){
          $scope.showMenuItem= true;
        }else{
           $scope.showMenuItem=  false;
        }
      }else{
        $scope.showMenuItem=  false;
      };

    });

    $scope.logout = function() {

      Auth.logout(function(err) {
        if(!err) {
          
          $scope.showMenuItem=false;
          $scope.collapse=true;
          $location.path('/');
        }
      });
    };
  });
