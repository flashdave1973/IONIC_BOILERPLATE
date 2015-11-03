'use strict';

(function(){
  angular.module('CDC_MISO')
    .controller('NotifyCtrl', NotifyCtrl);

  function NotifyCtrl($scope, Chats){
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  }

}());
