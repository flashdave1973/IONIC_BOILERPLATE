(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.playlists
     *
     * @description
     * Implementation of playlists component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('playlists', Playlists);

    Playlists.$inject = [];

    /**
     * @memberOf components.playlists
     * @description
     * Play lists
     *
     * @example
    <playlists></playlists>
     */

    function Playlists() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : PlaylistsController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/Playlists/playlists.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    // When Injecting into a controller
    PlaylistsController.$inject = [];

    function PlaylistsController() {

        var vm = this;

        vm.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    }

})();
