(function () {
    "use strict";

    /**
     * @ngdoc service
     * @name ChatsFactory
     * @description
     *     Provides services to fetch chat users and messages  
     */
    angular
    .module('services')
    .factory('ChatsFactory', ChatsFactory);

    ChatsFactory.$inject = ['$q', 'Backend'];

    function ChatsFactory($q, Backend) {

        // Set Service 
        var service = {
            chats       : []
        };

        return service;

        //////////////////

        /**
        * @memberOf ChatsFactory
        * @description Gets a list of chats
        * @returns [object]
        *
        * @example
        * ChatsFactory.getChats()
        */
        function getChats() {
            var deferred = $q.defer();

            Backend.get('chats').then(function(response) {
                // store result
                service.chats = response.data;

                // resolve promise
                deferred.resolve();
            },
            function (error) {
                deferred.reject(error.statusText);
            });

            return deferred.promise;
        }
    }

})();
