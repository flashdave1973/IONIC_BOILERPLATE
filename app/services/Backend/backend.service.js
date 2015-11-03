(function () {
    "use strict";

    angular
    .module('services')
    .factory('Backend', Backend);

    Backend.$inject = ['$http', '$q', 'ENV', 'hackstack', 'backendType', 'mockData', 'mockDataOverrides', '$log'];

    function Backend($http, $q, ENV, hackstack, backendType, mockData, mockDataOverrides, $log) {
        var service = {
            get         : get,
            post        : post,
            put         : update,
            delete      : remove,
            createCache : createCache
        };

        return service;

        //////////////////

        function getEndpoint(endpointHandle, data, cache) {
            var endpoint;


            // determine appropriate endpoint to access
            if(endpointHandle === 'getUsers') {

                // is dev? return mock
                if (backendType === 'mock') {

                    // return mocked mocked data
                    // endpoint = hackstack.mock(mockData.users);
                    endpoint = mockData.users;
                }
                
                // is prod? return live
                else if (backendType === 'live') {
                    // cache?
                    cache ? cache = true : cache = false;

                    // return live api endpoint
                    endpoint = {
                        'get': function () {
                            return $http.get(ENV.resourceRoot + ENV.api.users, {
                                cache: cache
                            });
                        },
                        'getAll': function () {
                            return $http.get(ENV.resourceRoot + ENV.api.users, {
                                cache: cache
                            });
                        }
                    };
                }
            }

            // missing endpoint?
            if (!endpoint) {
                $log.error('No such endpoint: ' + endpointHandle.toString());
                return null;
            }

            // return endpoint for use
            return endpoint;
        }

        function get(endpoint, data, cache) {
            var deferred = $q.defer(),
            api      = getEndpoint(endpoint, data, cache);

            if(api) {
                deferred.resolve(api);
            } else {
                deferred.reject('is not allowed.');
            }

            return deferred.promise;
        }

        function post(endpoint, data, cache) {
            var deferred = $q.defer(),
            api      = getEndpoint(endpoint, data, cache);

            if(api) {
                if (backendType === 'live') {
                    api.create().then(function (response) {
                        deferred.resolve(response);
                    }).catch(function (response) {
                        deferred.reject(response);
                    });
                }
                else {
                    api.create(data).then(function (response) {
                        deferred.resolve(response);
                    }).catch(function (response) {
                        deferred.reject(response);
                    });
                }
            }

            return deferred.promise;
        }

        function update(endpoint, data, cache) {
            var deferred = $q.defer();

            cache ? cache = true : cache = false;

            $http.put(ENV.resourceRoot + "/" + endpoint, data, {
                cache : cache
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });

            return deferred.promise;
        }

        function remove(endpoint, data, cache) {
            var deferred = $q.defer();

            cache ? cache = true : cache = false;

            $http.delete(ENV.resourceRoot + "/" + endpoint, data, {
                cache : cache
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data, status, headers, config) {
                deferred.reject(data);
            });

            return deferred.promise;
        }

        // To enable caching, set the request configuration cache property to true (to use default cache) or to a custom cache object (built with $cacheFactory).
        // When the cache is enabled, $http stores the response from the server in the specified cache.
        // The next time the same request is made, the response is served from the cache without sending a request to the server
        function createCache(cacheName) {
            $angularCacheFactory(cacheName, {
                maxAge              : 90000,
                cacheFlushInterval  : 6000000,
                deleteOnExpire      : 'aggressive'
            });

            return $http.defaults.cache = $angularCacheFactory.get(cacheName);
        }
    }

})();
