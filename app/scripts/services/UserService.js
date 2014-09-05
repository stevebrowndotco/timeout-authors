'use strict';

angular.module('myApp')
  .factory('User', function ($resource) {
    return $resource('/auth/users/:id/', {},
      {
        'update': {
          method:'PUT'
        }
      });
  });
/*
angular.module('myApp')
  .factory('ViewsService', function ($resource) {
    return $resource('api/views/:viewId', {
      viewId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      deleteAll:{
		method: 'DELETE'
      }
    });
  });*/