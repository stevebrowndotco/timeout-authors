'use strict';

angular
    .module('pp.graffiti',[
        'date'
    ])
    .factory('graffiti', function (GRAFFITI, $http, date, $filter, $rootScope) {

        var basePath = '/v1/sites/',
            accessToken;

        function graffiti(requestParams) {

                return $http({
                    method: requestParams.method,
                    url: requestParams.endpoint,
                    data: requestParams.data,
                    headers: requestParams.headers,
                    params: requestParams.params
                })
                .then(function (response) {
                    if (response.data) {
                        return response.data;
                    }
                });
        }

        function client(endpoint, method, params, data) {

            var requestParams = {
                method: method,
                endpoint: endpoint,
                params: params,
                data: data
            };

            return request(requestParams);
        }

        function getGraffitiToken() {

            var requestParams = {
                method: 'POST',
                endpoint: GRAFFITI.host + '/v1/oauth2/token',
                data: GRAFFITI.token,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            return graffiti(requestParams);

        }

        function request(requestParams) {

            if (accessToken) {

                requestParams.headers = getHeaders(accessToken);
                $rootScope.accessToken = accessToken;
                return graffiti(requestParams);

            } else {

                return getGraffitiToken().then(function (data) {

                    accessToken = data.access_token;
                    $rootScope.accessToken = accessToken;
                    requestParams.headers = getHeaders(accessToken);
                    return graffiti(requestParams);

                });

            }

        }

        function getHeaders(accessToken) {
            return {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json;charset=utf-8'
            };
        }

        function search(what, page, sort, locale) {
            if(what === 'node-7073') {
                sort = null;
            }
            var requestParams = {
                method: 'GET',
                headers: getHeaders(),
                endpoint: GRAFFITI.host +  basePath + 'uk-london' + '/search',
                params: {
                    what: what,
                    page_size: page,
                    facets: true,
                    locale: locale,
                    sort: sort
                }
            };

            return request(requestParams);
        }

        return {
            client              :       client,
            token               :       getGraffitiToken,
            search              :       search
        };

    });