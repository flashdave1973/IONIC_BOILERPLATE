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
 * `gulp env:dev`
 * `gulp env:staging`
 * `gulp env:prod`
 * Compiles a constant to include app-wide variables set in the config file
 */

/** development environment config */
gulp.task('env:dev', function() {
    return plugins.ngConstant({
        constants   : {
            ENV         : config.ENV.dev,
            backendType : global.isMock ? 'mock' : 'wrap'
        },
        name        : 'config',
        wrap        : true,
        stream      : true
    })
    .pipe(plugins.rename('config.js'))
    .pipe(gulp.dest(config.dist.root + '/config'));
});


/** production environment config */
gulp.task('env:prod', function() {
    return plugins.ngConstant({
        constants   : {
            ENV         : config.ENV.prod,
            backendType : 'live'
        },
        name        : 'config',
        wrap        : true,
        stream      : true
    })
    .pipe(plugins.rename('config.js'))
    .pipe(gulp.dest(config.dist.root + '/config'));
});
