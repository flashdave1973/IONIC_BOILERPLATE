(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.browse
     *
     * @description
     * Implementation of browse component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('browse', Browse);

    Browse.$inject = [];

    /**
     * @memberOf components.browse
     * @description
     * Browse
     *
     * @example
    <browse></browse>
     */

    function Browse() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : BrowseController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Browse/browse.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    BrowseController.$inject = [];

    function BrowseController() {

        var vm = this;


    }

})();
