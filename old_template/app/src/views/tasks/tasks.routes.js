(function () {
  'use strict';

  angular.module('CDC_MISO').config(router);

  function router($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
      .state('tab.tasks', {
        url  : '/tasks',
        views: {
          'tasks'  : {
            templateUrl : 'src/views/tasks/tasks.html'//,
            //controller  : 'AlertsCtrl',
            //controllerAs: 'alerts'
          }
        }
      })
  }
})();

