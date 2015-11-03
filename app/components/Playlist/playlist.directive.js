(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.playlist
     *
     * @description
     * Implementation of playlist component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('playlist', Playlist);

    Playlist.$inject = [];

    /**
     * @memberOf components.playlist
     * @description
     * Play list
     *
     * @example
    <playlist></playlist>
     */

    function Playlist() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : PlaylistController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Playlist/playlist.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    PlaylistController.$inject = ['$stateParams'];

    function PlaylistController($stateParams) {

        var vm = this;

    }

})();
