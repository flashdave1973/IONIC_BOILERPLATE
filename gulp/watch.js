'use strict';

var config = require('../gulp/config.js');
var gulp   = require('gulp');

// `gulp watch`
// Watch files for changes and run gulp tasks when they do
gulp.task('watch', function() {
    gulp.watch(config.sass.watch, ['sass']);

    gulp.watch(config.scripts.watch, ['scripts']);

    gulp.watch(config.views.watch, ['views']);

});
