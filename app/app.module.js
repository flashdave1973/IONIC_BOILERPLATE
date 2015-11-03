(function () {
    "use strict";

    /**
     * @ngdoc module
     * @name module
     *
     * @requires ionic
     * @requires AllClearApp.services
     * @requires ngDialog
     * @requires templates
     * @requires components
     * @requires components.layout
     * @requires components.shared
     *
     * @description
     * Main application module
     * Ionic AllClearApp App
     *
     */
     angular
         .module('AllClearApp', [
            // ionic modules
            'ionic',
            'ionic.ion.imageCacheFactory',

            // Custom modules
            'config',
            'components',
            'services',

            // 3rd Party modules
            'PubSub',
            'hackstack',
            'LocalStorageModule'
         ]);
})();

