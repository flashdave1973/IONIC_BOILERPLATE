(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.chatDetails
     *
     * @description
     * Implementation of search component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('chatDetails', ChatDetails);

    ChatDetails.$inject = [];

    /**
     * @memberOf components.chatDetails
     * @description
     * search
     *
     * @example
    <chat-details></chat-details>
     */

    function ChatDetails() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : ChatDetailsController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/ChatDetails/chat-details.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    ChatDetailsController.$inject = ['$stateParams', 'Chats'];

    function ChatDetailsController($stateParams, Chats) {

        var vm = this;

        // Set Chat Info from ID
        vm.chat = Chats.get($stateParams.chatId);


    }

})();
