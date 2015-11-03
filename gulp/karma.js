'use strict';

var config  = require('../gulp/config.js');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
    rename: {
        'gulp-angular-templatecache': 'templateCache'
    }
});

/**
 * `gulp karma`
 * Run unit tests on the files specified in the config
 * usign the karma.conf.js file also specified in the config
 * Need to make sure failed tests cause gulp to exit non-zero
 */
gulp.task('karma', function() {
    gulp.src(config.test.testFiles)
        .pipe(plugins.karma({
            configFile  : config.test.karma,
            action      : 'run'
        }))
        .on('error', function(err) {
            return err;
        });
});
