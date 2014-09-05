'use strict';

var myApp = angular.module('myApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'http-auth-interceptor',
    'ui.bootstrap',
    'du-utils',
    'infinite-scroll',//optional
    'ui.sortable',//optional
    'underscore',
    'angularFileUpload',
    'uxentrik-text-editor',
    'ngPrettyJson',
    'myApp.controller'
])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$tooltipProvider', function ( $routeProvider, $locationProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'partials/list.html',
        controller: 'MainCtrl'
      })
      // PROFILE SECTION =========================
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'LoginCtrl'
      })//
      .when('/admin-view', {
        templateUrl: 'partials/applications/admin/list.html',
        controller: 'ViewCtrl'
      })
      .when('/admin-view!:viewId', {
        templateUrl: 'partials/applications/admin/view.html',
        controller: 'ViewCtrl'
      })
      .when('/blogs', {
        templateUrl: 'partials/applications/blogs/list.html',
        controller: 'BlogsCtrl'
      })
      .when('blogs!create', {
        templateUrl: 'partials/applications/blogs/create.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs!edit!:blogId', {
        templateUrl: 'partials/applications/blogs/edit.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs!:blogId', {
        templateUrl: 'partials/applications/blogs/view.html',
        controller: 'BlogsCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/auth/facebook', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/calcolator', {
        templateUrl: 'partials/calcolator.html'
      })
  
//d3  
      .when('/d3', {
        templateUrl: 'partials/d3/d3.html',
        controller:'CtrlD3'
      })   
      .when('/d3chartbar', {
        templateUrl: 'partials/d3/chartbar.html'
      })   
      .when('/d3chartbarbasic', {
        templateUrl: 'partials/d3/chartbarbasic.html'
      })   
      .when('/chartgantt', {
        templateUrl: 'partials/d3/chartgantt.html'
      })   
      .when('/chartbarhorizontal', {
        templateUrl: 'partials/d3/chartbarhorizontal.html'
      })   

//Apps




  
//layout  
      .when('/remote-pagination', {
        templateUrl: 'partials/remote-pagination.html'
      })
      .when('/infinityscrolldemo', {
        templateUrl: 'partials/infinityscrolldemo.html'
      })


//ng bootstrap ui 
      .when('/accordion', {
        templateUrl: 'partials/angular-ui-templates/accordion.html',
        controller:'CtrlAccordion'
      })
      .when('/alert', {
        templateUrl: 'partials/angular-ui-templates/alert.html',
        controller:'CtrlAlert'
      })
      .when('/buttons', {
        templateUrl: 'partials/angular-ui-templates/buttons.html'
      })
      .when('/carousel', {
        templateUrl: 'partials/angular-ui-templates/carousel.html'
      })
      .when('/collapse', {
        templateUrl: 'partials/angular-ui-templates/collapse.html'
      })
      .when('/datepicker', {
        templateUrl: 'partials/angular-ui-templates/datepicker.html'
      })
      .when('/dropdown', {
        templateUrl: 'partials/angular-ui-templates/dropdown.html'
      })
      .when('/modal', {
        templateUrl: 'partials/angular-ui-templates/modal.html'
      })
      .when('/pagination', {
        templateUrl: 'partials/angular-ui-templates/pagination.html'
      })
      .when('/popover', {
        templateUrl: 'partials/angular-ui-templates/popover.html'
      })
      .when('/progress', {
        templateUrl: 'partials/angular-ui-templates/progress.html'
      })
      .when('/rating', {
        templateUrl: 'partials/angular-ui-templates/rating.html'
      })
      .when('/tabs', {
        templateUrl: 'partials/angular-ui-templates/tabs.html'
      })
      .when('/timepicker', {
        templateUrl: 'partials/angular-ui-templates/timepicker.html'
      })
      .when('/tooltip', {
        templateUrl: 'partials/angular-ui-templates/tooltip.html'
      })
      .when('/typeahead', {
        templateUrl: 'partials/angular-ui-templates/typeahead.html'
      })
//extra ui
      .when('/sortable', {
        templateUrl: 'partials/angular-ui-templates/sortable.html'
      })





      .otherwise({
        redirectTo: '/'
      });



    $locationProvider.html5Mode(true);
  }])

  .run(['$rootScope', '$location', '$http', 'Auth', function ($rootScope, $location, $http, Auth) {

    //watching the value of the currentUser variable.
    $rootScope.$watch('currentUser', function(currentUser) {
      // if no currentUser and on a page that requires authorization then try to update it
      // will trigger 401s if user does not have a valid session
      if (!currentUser && (['/', '/login', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
        Auth.currentUser();
      }
    });

    // On catching 401 errors, redirect to the login page.
    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });
    $http.get('/api/config').success(function(config) {
        $rootScope.config = config;
      });
  }]);