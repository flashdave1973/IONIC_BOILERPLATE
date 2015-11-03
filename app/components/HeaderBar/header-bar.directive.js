(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.headerBar
     *
     * @description
     * Implementation of menu component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('headerBar', HeaderBar);

    HeaderBar.$inject = [];

    /**
     * @memberOf components.headerBar
     * @description
     * Header Bar
     *
     * @example
    <header-bar></header-bar>
     */

    function HeaderBar() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : HeaderBarController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/HeaderBar/header-bar.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

            // ionic Modal options
            ctrl.options = scope.$new;
        }
    }

    // When Injecting into a controller
    HeaderBarController.$inject = ['$ionicPlatform', 'PubSub'];

    function HeaderBarController($ionicPlatform, PubSub) {

        var vm = this;

        // refresh teams list
        var appVersion = function (message, data) {

            // Cordova Version
            vm.version = data;
        };


        // initialization for controller
        var activate = function () {

            // app-versioning
            PubSub.subscribe('app-version', appVersion);
        };

        // run initialization
        activate();

    }

})();
