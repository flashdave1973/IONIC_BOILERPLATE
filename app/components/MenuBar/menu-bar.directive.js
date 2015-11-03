(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.menuBar
     *
     * @description
     * Implementation of menu component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('menuBar', MenuBar);

    MenuBar.$inject = [];

    /**
     * @memberOf components.menuBar
     * @description
     * Menu Bar
     *
     * @example
    <menu-bar></menu-bar>
     */

    function MenuBar() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : MenuBarController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/MenuBar/menu-bar.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

            // ionic Modal options
            ctrl.options = scope.$new;
        }
    }

    // When Injecting into a controller
    MenuBarController.$inject = ['$ionicPlatform', 'PubSub'];

    function MenuBarController($ionicPlatform, PubSub) {

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
