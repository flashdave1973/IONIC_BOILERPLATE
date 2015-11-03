(function () {
    "use strict";

    /**
     * @ngdoc router
     * @name router
     * @description
     *     Route provider for application states
     * @requires $stateProvider
     * @requires $urlRouterProvider
     *
     * @example
     * $stateProvider.state('Home', {
     *     url: '/',
     *     templateUrl: "layout/Home.html"
     * });
     */
    angular
        .module('AllClearApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.

        // setup an abstract state for the menus directives
        $stateProvider.state('main', {
            abstract    : true,
            url         : '/',
            templateUrl: "layout/home.html"
        })
        .state('main.login', {
            url: '',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/UserLogin/state.html'
                }
            }
        })
        .state('main.signal-emergency', {
          url: 'signal-emergency',
          views: {
            'menuContent': {
              templateUrl: 'states/Main/SignalEmergency/state.html'
            }
          }
        })
        .state('main.emergency-type', {
          url: 'emergency-type',
          views: {
            'menuContent': {
              templateUrl: 'states/Main/EmergencyType/state.html'
            }
          }
        })
        .state('main.status', {
            url: 'status',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Status/state.html'
                }
            }
        })
        .state('main.search', {
            url: 'search',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Search/state.html'
                }
            }
        })
        .state('main.browse', {
            url: 'browse',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Browse/state.html'
                }
            }
        })
        .state('main.playlists', {
            url: 'playlists',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Playlists/state.html'
                }
            }
        })
        .state('main.single', {
            url: 'playlists/:playlistId',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Playlist/state.html'
                }
            }
        })
        .state('main.chats', {
            url: 'chats',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Chat/state.html'
                }
            }
        })
        .state('main.chat-detail', {
            url: 'chats/:chatId',
            views: {
                'menuContent': {
                    templateUrl: 'states/Main/Chat/Details/state.html'
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');
    };

})();
