'use strict';

angular.module('myApp')
  .factory('DocsService', function ($resource) {
    return $resource('api/docs/:docId', {
      viewId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
