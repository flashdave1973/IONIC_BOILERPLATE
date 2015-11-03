'use strict';

var config     = require('../gulp/config.js');
var gulp       = require('gulp');
var es         = require('event-stream');
var concat     = require('gulp-concat');
var wrapJS     = require('gulp-wrap-js');

function getConfig() {
    var constants = config.ENV;
    if (global.isProd) {
        constants.resourceRoot = config.resourceRoot.prod;
    }
    else {
        constants.resourceRoot = config.resourceRoot.dev;
    }

    return constants;
}

// `gulp scripts`
gulp.task('scripts', function(cb) {

    // Concat all scripts together and wrap in IIFE
    gulp.src(config.scripts.src)
        .pipe(concat('app.js'))
        .pipe(wrapJS('(function () {\n\t"use strict";\n\n\t %= body % })();'))
        .pipe(gulp.dest(config.scripts.dest));

    cb();
});