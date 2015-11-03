// Karma configuration
// Generated on Mon Jan 12 2015 16:28:37 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app.js': ['coverage']
    },


    // karma-ng-html2js plugin config
    // ngHtml2JsPreprocessor: {
        // stripPrefix: 'modules/',
        // moduleName: 'templates'
    // },


    // list of files / patterns to load in the browser
    // { pattern: 'bower_components/angular-mocks-qunit/src/angular-mocks-qunit.js', watching: false },
    files: [
        '../node_modules/karma-jasmine/lib/adapter.js',
        'js/ionic.bundle.js',
        'app-dependencies.js',
        '../bower_components/angular-mocks/angular-mocks.js',
        'config/config.js',
        'app.js',
        '../app/**/*.specs.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'spec', 'html'],


    // karma-html-reporter plugin config
    htmlReporter: { outputDir: 'docs/Reports' },


    // karma-coverage plugin config
    coverageReporter: {
        type: 'html',
        dir: '../docs/Reports/coverage/',
        subdir: function(browser) {
            return browser.toLowerCase().split(/[ /-]/)[0];
        }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Include these plugins when testing
    plugins: [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        // 'karma-ng-html2js-preprocessor',
        'karma-coverage',
        'karma-html-reporter',
        'karma-spec-reporter'
    ]

  });
};
