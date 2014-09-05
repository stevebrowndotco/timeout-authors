'use strict';

var myApp = angular.module('myApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'myApp.controller',
    'ui.sortable'

])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$tooltipProvider', function ( $routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/list.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }])
