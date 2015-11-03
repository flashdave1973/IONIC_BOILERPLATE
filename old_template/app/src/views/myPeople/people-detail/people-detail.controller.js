'use strict';

(function(){
  angular.module('CDC_MISO')
    .controller('PeopleDetailCtrl', PeopleDetailCtrl);

  function PeopleDetailCtrl($scope, Chats, $stateParams, $http){
    $scope.chat = Chats.get($stateParams.chatId);

    $scope.awesomeThings = [];

   /* $http.get('http://localhost:9000/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    console.log($scope.awesomeThings);*/
  }

}());
