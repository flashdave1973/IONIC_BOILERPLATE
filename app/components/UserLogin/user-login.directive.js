(function () {
    "use strict";

    /**
     * @ngdoc directive
     * @name components.userLogin
     *
     * @description
     * Implementation of userLogin component
     *
     * Restrict To:  Element
     */

    angular
    .module('components')
    .directive('userLogin', UserLogin);

    UserLogin.$inject = [];

    /**
     * @memberOf components.userLogin
     * @description
     * User Login
     *
     * @example
    <user-login></user-login>
     */

    function UserLogin() {
        var directive = {
            restrict            : 'E',
            scope : {},
            controller          : UserLoginController,
            controllerAs        : 'ctrl',
            bindToController    : true,
            templateUrl         : 'components/UserLogin/user-login.directive.html',
            link                : linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    UserLoginController.$inject = ['UserFactory', 'PubSub', '$location', 'localStorageService'];

    function UserLoginController(UserFactory, PubSub, $location, localStorageService) {

        // Controller Object
        var vm = this;

        // Form data for the login modal
        vm.loginData = {};

        // Placeholder for user data
        vm.users = [];

        // Perform the login action when the user submits the login form
        vm.doLogin = function () {
            var len = vm.users.length, 
            loggedOn = false;

            // is remember me is set
            if (vm.loginData.rememberMe === true){
                var rememberMe = {
                    'remember': vm.loginData.rememberMe, 
                    'username': vm.loginData.username
                };
                localStorageService.set('rememberMe', rememberMe);

            // remember me is not set
            } else {
                var rememberMe = {
                    'remember': false, 
                    'username': ''
                };
                localStorageService.set('rememberMe', rememberMe);
            }

            // loop thru users 
            for (var i = 0, lUsers = len; i < lUsers; i++){

                // match user/pass
                if (vm.users[i].username === vm.loginData.username &&
                    vm.users[i].password === vm.loginData.password ){

                    // redirect based on role
                    redirect(vm.users[i].role);
                    loggedOn = true;
                } 
            }

            // if invalid login
            if (!loggedOn) {
                alert ('Invalid Username and/or Password Combination');
            }
        };

        // redirect location
        var redirect = function (role) {

            // switch role
            switch (role) {
                case 'monitor':
                    // change the path
                    $location.path('/signal-emergency')
                    break; 
                default: 
                    // change the path
                    $location.path('/chats')
            }
        };

        // initialization for controller
        var activate = function () {
            var data = localStorageService.get('rememberMe');

            // verify ther is data
            if(data){

                // set remember me data
                if (data.remember === true){
                    vm.loginData.username = data.username;
                    vm.loginData.rememberMe = true;
                }
            }

            // send get Team Leader from factory
            UserFactory.getUsers().then(function () {

                // return team leaders teams
                vm.users = UserFactory.users;
            });
        };

        // run initialization
        activate();

    }

})();

