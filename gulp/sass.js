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
 * `gulp styles` has three separate build options targeting either
 * SASS, LESS, or regular CSS.  The gulpfile.js should be modified to target
 * the stylesheet approach being utilized by the current development project.
 * Regardless of which option is used the resulting output will always be
 * a file named `style.css` in the `.dist/` output directory
 */

/** sass build */
gulp.task('sass', function(done) {

    /** Concat CSS files together */
    return gulp.src(config.sass.src)
    .pipe(plugins.sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(config.sass.dest));

});
