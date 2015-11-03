(function () {
  'use strict';

  angular.module('CDC_MISO').config(router);

  function router($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
      .state('tab.organization', {
        url  : '/organization',
        views: {
          'organization'  : {
            templateUrl : 'src/views/organization/organization.html',
            controller  : 'OrganizationCtrl'
            //controllerAs: 'alerts'
          }
        }
      })
  }
})();

