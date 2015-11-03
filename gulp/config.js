'use strict';

module.exports = {

    // Server host and port number used by webserver task
    // @param {string} host
    // @param {number} port
    "server": {
        "host": "localhost",
        "port": 3201,
        "jsDocPort"   : 4000
    },

    // The path to the build directory:
    // @param {string} root - If it does not exist, it will be created during the build
    "dist": {
        "root": "./www"
    },

    // Static content
    // @param {string} base - Base directory to be copied into
    // @param {array} src - List of files to be copied
    "assets": {
        "base": "./app",
        "src": ["./app/js/ionic.bundle.js",
                "./app/fonts/**/*",
                "./app/scss/**/*",
                "./app/img/**/*"]
    },

    // The paths for the styles task:
    // @param {array} source
    // @param {string} destination
    // @param {array} watch - which Sass files to watch for changes / livereload
    // @param {array} browsers - browsers to target for adding vendor prefixes to output CSS
    "sass" : {
        "dest"        : './www',
        "outputFile"  : 'style.css',
        "browsers" : [
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6',
        ],
        "src"     : ['bower_components/bootstrap/dist/css/bootstrap.css',
                   'app/components/**/*.css',
                   'app/states/**/*.css',
                   'app/scss/**/*.scss'
        ],
        "watch"   : ['app/**/*.css',
                   'app/scss/**/*.scss'
        ]
    },

    // The paths for the scripts task:
    // @param {array} source
    // @param {string} destination
    // @param {array} watch - which JS files to watch for changes / livereload
    "scripts": {
        "src": [
            'app/app.module.js',
            'app/app.ionic.js',
            'app/app.config.js',
            'app/app.states.js',
            'app/states/states.module.js',
            'app/states/**/*.module.js',
            'app/states/**/*.config.js',
            'app/components/components.module.js',
            'app/components/**/*.js',
            'app/services/services.module.js',
            'app/services/**/*.js',
            '!app/**/*.specs.js'
        ],
        "dest": "./www/",
        "watch": ["app/**/*.js"]
    },

    // The paths for the views task:
    // @param {array} source
    // @param {array} watch - which HTML files to watch for changes / livereload
    "views": {
        "src": ["app/**/*.html", "!app/index.html"],
        "watch": ["app/**/*.html"]
    },

    // @param {string} karma - Karma test config file location
    // @param {array} testFiles - Which files to tests
    "test": {
        "karma": "karma.conf.js",
        "testFiles": [ "app/scripts/app.js", "app/scripts/components.js", "app/scripts/services.js" ]
    },

    /**
     * @property {Object} dependencies  - configuration options for dependencies tasks
     *  @property {Object} js           - javacript dependencies configuration
     *   @property {array} src          - source files to be concatenated into javascript dependencies output file
     *   @property {string} dest        - output directory path for javascript dependencies
     *   @property {string} outputFile  - name for javascript dependency output file
     */
    "dependencies": {
        "js" : {
            "src" : [
                "bower_components/angular.pubsub/src/angular-pubsub.js",
                "bower_components/angular-sanitize/angular-sanitize.js",
                "bower_components/angular-hackstack/dist/hackstack.js",
                "bower_components/angular-local-storage/dist/angular-local-storage.min.js",
                "app/js/ionic.ion.imagecachefactory.js"
            ],
            "dest"        : "./www",
            "outputFile"  : "app-dependencies.js"
        }
    },

    /**
     * @property {Object} ENV               - Environment specific variables included in the angular config module, assigned to ENV constant
     *  @property {Object} dev              - Development environment configuration
     *   @property {string} resourceRoot    - base URL of application
     *   @property {string} debugInfo       - flag to indicate whether or not to include debug symbols for angular
     *   @property {string} imagePath       - output path for image content
     *   @property {string} iconPath        - output path for icon content
     *  @property {Object} API              - 
     *  @property {Object} prod             - Production environment configuration
     *   @property {string} resourceRoot    - base URL of application
     *   @property {string} debugInfo       - flag to indicate whether or not to include debug symbols for angular
     *   @property {string} imagePath       - output path for image content
     *   @property {string} iconPath        - output path for icon content
     *  @property {Object} API              - 
     */
    "ENV" : {
        "dev": {
            "resourceRoot"            : "api",
            "debugInfo"               : true,
            "environment"             : "development",
            "imagePath"               : "images",
            "iconPath"                : "icons",
            "api" : {
                /* USER API */
                "getUsers"                       : "/User/getUsers"
                /* USER API */
            }
        },
        "prod": {
            "resourceRoot"            : "api",
            "debugInfo"               : false,
            "environment"             : "production",
            "imagePath"               : "images",
            "iconPath"                : "icons",
            "api" : {
                /* USER API */
                "getUsers"                       : "/User/getUsers"
                /* USER API */
            }
        }
    }

};