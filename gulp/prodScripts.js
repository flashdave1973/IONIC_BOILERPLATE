'use strict';

var config     = require('../gulp/config.js');
var gulp       = require('gulp');
var uglify    = require('gulp-uglify');

gulp.task('prodScripts', function(){
    gulp.src(config.dist.root + '/scripts/*.js')
        .pipe(uglify({ mangle: false, compress: { drop_console: true } } ))
        .pipe(gulp.dest(config.scripts.dest));
});