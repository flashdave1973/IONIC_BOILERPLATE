(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.bottomMenu
     *
     * @description
     * Implementation of bottomMenu component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('bottomMenu', BottomMenu);

    BottomMenu.$inject = [];

    /**
     * @memberOf components.bottomMenu
     * @description
     * Bottom Menu
     *
     * @example
    <bottom -menu></bottom-menu>
     */

    function BottomMenu() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : BottomMenuController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/BottomMenu/bottom-menu.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    BottomMenuController.$inject = [];

    function BottomMenuController() {

        var vm = this;


    }

})();
