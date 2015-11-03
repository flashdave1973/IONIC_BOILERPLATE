(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.chat
     *
     * @description
     * Implementation of search component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('chat', Chat);

    Chat.$inject = [];

    /**
     * @memberOf components.chat
     * @description
     * Chat
     *
     * @example
    <chat></chat>
     */

    function Chat() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : ChatController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Chat/chat.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    ChatController.$inject = ['Chats'];

    function ChatController(Chats) {

        var vm = this;

        // Set Chat Info 
        vm.chats = Chats.all();

        vm.remove = function(chat) {
            Chats.remove(chat);
        }


    }

})();
