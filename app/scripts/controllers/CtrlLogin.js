'use strict';

angular.module('myApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $log, Auth, $http, $location, $window , _ , du) {
    $scope.$log=$log;
    if ($rootScope.currentUser) {
        $scope.admin=_.contains($rootScope.currentUser.roles, "administrator") ;
   
    };
  
    $scope.error = {};

    //get user preference;
    
    $scope.savePreferenceConfMsg=""
    


    $scope.logout = function() {
      console.log("$scope.logou ctrl login: ");
     
      Auth.logout(function(err) {
        if(!err) {
          
          $scope.showMenuItem=false;
          $scope.isCollapsed=true;
          $location.path('/');
        }
      });
    };


    $scope.savePreference=function(debug) {
      Auth.updateUser(debug,
        function(err) {
          $scope.errors = {};

          if (!err) {

            $scope.savePreferenceConfMsg="Preference has been Saved"
          } else {
            $scope.savePreferenceConfMsg="Something went wrong..."
          

          }
      });
    };
    $scope.loginLocalSubmit = function(form) {

      Auth.loginLocalAuth('password', {
          'email': $scope.user.email,
          'password': $scope.user.password
        },
        function(err) {
          $scope.errors = {};

          if (!err) {
           console.log("$scope.user: ");
           console.log($scope.user);
            $location.path('/profile');//redirect here after login is successful
          } else {

            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.type;
            });
            $scope.error.other = err.message;

          }
      });
    };
    $scope.loginOauth = function(provider) {

        $window.location.href = '/auth/' + provider;
    };
/*      console.log("facebookSubmit: ");
      Auth.loginFacebook('password', {
          'email': $scope.user.email,
          'password': $scope.user.password
        },
        function(err) {
          $scope.errors = {};

          if (!err) {
           
            $location.path('/blogs');//redirect here after login is successful
          } else {

            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.type;
            });
            $scope.error.other = err.message;

          }
      });
    };*/
  });



