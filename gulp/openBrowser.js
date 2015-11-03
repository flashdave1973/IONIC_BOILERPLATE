'use strict';

var config = require('../gulp/config.js');
var gulp   = require('gulp');
var opn    = require('opn');

gulp.task('openBrowser', function() {
    opn( 'http://' + config.server.host + ':' + config.server.port + '/#/' );
});