(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.status
     *
     * @description
     * Implementation of status component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('status', Status);

    Status.$inject = [];

    /**
     * @memberOf components.status
     * @description
     * Status
     *
     * @example
    <status></status>
     */

    function Status() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : StatusController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Status/status.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    StatusController.$inject = [];

    function StatusController() {

        var vm = this;

    }

})();
