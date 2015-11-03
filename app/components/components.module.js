(function () {
    "use strict";

    /**
     * @ngdoc module
     * @name components
     * @description base components module
     */
    angular.module('components', [
        'components.shared',
        'components.layout'
    ]);

    /**
     * @ngdoc module
     * @name components.shared
     * @description Shared components used throughout the app
     */
    angular.module('components.shared', []);

    /**
     * @ngdoc module
     * @name components.layout
     * @description Layout components used throughout the app
     */
    angular.module('components.layout', []);
})();
