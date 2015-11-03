(function () {
    "use strict";

    /**
     * @ngdoc service
     * @name UserFactory
     * @description
     *     Provides services to fetch, update, add and delete users
     */
    angular
        .module('services')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$q', 'Backend'];

    function UserFactory($q, Backend) {
        var service = {
            users               : [],
            getUsers            : getUsers
        };

        return service;

        //////////////////

        /**
         * @memberOf UserFactory
         * @description
         *     Provides a single user
         *     api/User/getUsers
         * @returns {object}
         *
         * @example
         * UserFactory.getUsers()
         */
        function getUsers() {
            var deferred = $q.defer();

            Backend.get('getUsers').then(function(response) {

                // store users info
                 service.users = response;

                // resolve promise
                deferred.resolve();
            }, function(error) {
                // reject promise
                deferred.reject(error.statusText);
            });

            return deferred.promise;
        }

        /**
         * @memberOf UserFactory
         * @description
         *     Provides a single user
         *     api/User/LoggedInUserDetails
         * @returns {object}
         *
         * @example
         * UserFactory.loggedInUserDetails()
         */
        function loggedInUserDetails() {
            var deferred = $q.defer();

            Backend.get('loggedInUserDetails').then(function(response) {
                // store current user info
                 service.loggedInUser = response.data.length ? response.data[0] : service.loggedInUser = response.data;

                // resolve promise
                deferred.resolve();
            }, function(error) {
                // reject promise
                deferred.reject(error.statusText);
            });

            return deferred.promise;
        }

    }

})();
