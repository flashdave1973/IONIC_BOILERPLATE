(function () {
  "use strict";

  /**
     * @ngdoc directive
     * @name components.signalEmergency
     *
     * @description
     * Implementation of signalEmergency component
     *
     * Restrict To:  Element
     */

  angular
    .module('components')
    .directive('signalEmergency', SignalEmergency);

  SignalEmergency.$inject = [];

  /**
     * @memberOf components.signalEmergency
     * @description
     * Signal Emergency
     *
     * @example
    <signal-emergency></signal-emergency>
     */

  function SignalEmergency() {
    var directive = {
      restrict            : 'E',
      scope : {},
      controller          : SignalEmergencyController,
      controllerAs        : 'ctrl',
      bindToController    : true,
      templateUrl         : 'components/SignalEmergency/signal-emergency.directive.html',
      link                : linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
  }

  SignalEmergencyController.$inject = ['$state'];

  function SignalEmergencyController($state) {

    // Controller Object
    var vm = this;

    // Start the process to signal an emergency
      vm.doEmergency = function() {
        $state.go('main.emergency-type');
      };

  }

})();
