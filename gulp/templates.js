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
 * `gulp templates`
 * Copy the index file and everything in the app/content directory to dist
 * Then populate Angular $templateCache with all our component templates
 */
gulp.task('templates', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest(config.dist.root));

    return gulp.src(config.templates.src)
        .pipe(plugins.minifyHtml({empty: true}))
        .pipe(plugins.templateCache(config.templates.outputFile, {
            standalone: true
        }))
        .pipe(gulp.dest(config.scripts.dest));
});
