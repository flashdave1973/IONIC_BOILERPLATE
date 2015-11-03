(function () {
  "use strict";

  /**
     * @ngdoc directive
     * @name components.emergencyType
     *
     * @description
     * Implementation of emergencyType component
     *
     * Restrict To:  Element
     */

  angular
    .module('components')
    .directive('emergencyType', EmergencyType);

  EmergencyType.$inject = [];

  /**
     * @memberOf components.emergencyType
     * @description
     * Emergency Type
     *
     * @example
    <emergency-type></emergency-type>
     */

  function EmergencyType() {
    var directive = {
      restrict            : 'E',
      scope : {},
      controller          : EmergencyTypeController,
      controllerAs        : 'ctrl',
      bindToController    : true,
      templateUrl         : 'components/EmergencyType/emergency-type.directive.html',
      link                : linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  EmergencyTypeController.$inject = ['$state'];

  function EmergencyTypeController($state) {

    // Controller Object
    var vm = this;




  }

})();
