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
 * `gulp clean`
 * Delete the contents of the dist directory
 */
gulp.task('clean', function(done) {
    return plugins.del([config.dist.root], done);
});

/**
 * `gulp clean:post`
 * remove post build artifacts
 */
gulp.task('clean:post', function(done) {
    return plugins.del(config.clean.post, done);
});
