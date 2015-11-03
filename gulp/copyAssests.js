'use strict';

var config     = require('../gulp/config.js');
var gulp       = require('gulp');

// `gulp copyAssets`
// Copy all non-html assets to the dist folder
gulp.task('copyAssets', function() {

    //Just grab the directories and pipe them to their destination
    // (specifying "base" maintains the directory structure)
    return gulp.src(config.assets.src, { base: config.assets.base })
        .pipe(gulp.dest(config.dist.root));
});