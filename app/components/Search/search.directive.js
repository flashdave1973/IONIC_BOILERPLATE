(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.search
     *
     * @description
     * Implementation of search component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('search', Search);

    Search.$inject = [];

    /**
     * @memberOf components.search
     * @description
     * search
     *
     * @example
    <search></search>
     */

    function Search() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : SearchController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Search/search.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    SearchController.$inject = [];

    function SearchController() {

        var vm = this;


    }

})();
