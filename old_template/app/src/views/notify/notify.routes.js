(function () {
  'use strict';

  angular.module('CDC_MISO').config(router);

  function router($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
      .state('tab.notify', {
        url  : '/notify',
        views: {
          'notify'  : {
            templateUrl : 'src/views/notify/notify.html',
            controller  : 'NotifyCtrl'
            //controllerAs: 'alerts'
          }
        }
      })
  }
})();

