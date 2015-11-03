(function () {
    "use strict";

    /**
     * @ngdoc router
     * @name router
     * @description
     *     Route provider for application states
     * @requires $stateProvider
     * @requires $urlRouterProvider
     *
     * @example
     * $stateProvider.state('Home', {
     *     url: '/',
     *     templateUrl: "layout/Home.html"
     * });
     */
    angular
        .module('AllClearApp')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {

    }

})();
