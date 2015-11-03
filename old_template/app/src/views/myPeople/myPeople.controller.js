'use strict';

(function(){
  angular.module('CDC_MISO')
    .controller('MyPeopleCtrl', MyPeopleCtrl);

  function MyPeopleCtrl($scope, Chats){
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  }

}());
