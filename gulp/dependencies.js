'use strict';

var config  = require('../gulp/config.js');
var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', 'event-stream', 'opn'],
    rename: {
        'gulp-angular-templatecache': 'templateCache'
    }
});

/**
 * `gulp bower`
 * concatenate all 3rd party code pulled in with bower package manager (or otherwise) into dependencies.js output file
 */
gulp.task('dependencies', function() {
    /** concatenate dependency scripts together */
    gulp.src(config.dependencies.js.src)
        .pipe(plugins.concat(config.dependencies.js.outputFile))
        .pipe(gulp.dest(config.dependencies.js.dest));
});

