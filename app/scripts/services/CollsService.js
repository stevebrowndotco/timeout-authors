'use strict';

angular.module('myApp')
  .factory('CollsService', function ($resource) {
    return $resource('api/colls/:collId', {
      collId: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      deleteAll:{
      	  method: 'DELETE'
      }
    });
  });
