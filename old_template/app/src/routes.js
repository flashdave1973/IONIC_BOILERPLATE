(function () {
  'use strict';

  angular.module('CDC_MISO').config(router);

  function router($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    //$urlRouterProvider.when('/', '/login'); // redirect to login if the state is ''
    //$urlRouterProvider.when('', '/login'); // redirect to login if the state is ''

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/tasks');

    $urlMatcherFactoryProvider.strictMode(false); //Disable the trailing slash

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "src/views/tabs/tabs.html"
      })
  }

})();

