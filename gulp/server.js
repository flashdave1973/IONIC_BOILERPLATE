'use strict';

var config     = require('../gulp/config.js');
var gulp       = require('gulp');
var webserver  = require('gulp-webserver');

// `gulp server`
// Start a webserver at the host and port specified in the config
// with livereload enabled
gulp.task('server', function() {
    gulp.src(config.dist.root)
        .pipe(webserver({
            host:             config.server.host,
            port:             config.server.port,
            livereload:       true,
            directoryListing: false
        }));
});