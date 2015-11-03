'use strict';

var config        = require('../gulp/config.js');
var gulp          = require('gulp');
var templateCache = require('gulp-angular-templatecache');

// `gulp views`
// Copy the index file and all .html files to dist
gulp.task('views', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest(config.dist.root));

    gulp.src('app/**/*.html', { src: 'base' })
        .pipe(gulp.dest(config.dist.root));
});