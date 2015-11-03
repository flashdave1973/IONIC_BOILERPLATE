'use strict';

var config  = require('../gulp/config.js');
var gulp    = require('gulp');
var shell = require('gulp-shell');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', 'event-stream', 'opn'],
    rename: {
        'gulp-angular-templatecache': 'templateCache'
    }
});

/**
 * `gulp jsdoc`
 * Executes a node shell task to run jsdoc from node_modules
 * Includes the readme file (-r) and angular-jsdoc config (-c) and template (-t) files
 * Outputs (-d) to ./docs directory
 * Reads (-r) files from ./app directory
 */
gulp.task('docs', shell.task([
    'node node_modules/jsdoc/jsdoc.js ' +
    '-R README.md ' +
    '-c node_modules/angular-jsdoc/conf.json ' +
    '-t node_modules/angular-jsdoc/template ' +
    '-d docs/jsdoc ' +
    '-r app/components '+
    '-r app/fonts '+
    '-r app/img '+
    '-r app/layout '+
    '-r app/scss '+
    '-r app/services '+
    '-r app/states '
]));

gulp.task('docServer', ['docs'], function() {
    gulp.src('./docs')
        .pipe(plugins.webserver({
            host                : config.server.host,
            port                : config.server.jsDocPort,
            livereload          : true,
            directoryListing    : true
        }));
});

gulp.task('openDocs', ['docServer'], function() {
    plugins.opn( 'http://' + config.server.host + ':' + (config.server.jsDocPort) + '/jsdoc/index.html' );
    gulp.watch(config.scripts.watch, ['docs']);
});
