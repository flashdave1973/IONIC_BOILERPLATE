(function () {
  'use strict';

  angular.module('CDC_MISO').config(router);

  function router($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
      .state('tab.myPeople', {
        url  : '/myPeople',
        views: {
          'myPeople'  : {
            templateUrl : 'src/views/myPeople/myPeople.html',
            controller  : 'MyPeopleCtrl'
            //controllerAs: 'alerts'
          }
        }
      })
      .state('tab.people-detail', {
        url: '/myPeople/:chatId',
        views: {
          'myPeople': {
            templateUrl: 'src/views/myPeople/people-detail/people-detail.html',
            controller: 'PeopleDetailCtrl'
          }
        }
      })
  }
})();

