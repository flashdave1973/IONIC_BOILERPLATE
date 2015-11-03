'use strict';

// Require config and all node modules needed for this file
var config  = require('./gulp/config.js');
var fs      = require('fs');
var gulp    = require('gulp');

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del'],
  rename: {
    'gulp-angular-templatecache': 'templateCache'
  }
});

// Set flag for running a production build to false by default
global.isProd = false;

// Set flag for using mock service data to false by default
global.isMock = false;

// Load in all gulp task files from ./gulp directory
var tasks = fs.readdirSync('./gulp/').filter(function(file) {
  return /(\.(js)$)/i.test(file);
});

// list all available gulp tasks
tasks.forEach(function(task) {
  console.log('Loading::', task);
  require('./gulp/' + task);
});

// Task to set isProd flag to true when running a production build
gulp.task('setIsProd', function() {
  global.isProd = true;
});

// Task to set isMock flag to true when running a dev build
gulp.task('setIsMock', function() {
  global.isMock = true;
});

// Running `gulp test` in Terminal/Command Line will execute the test suite using Karma
gulp.task('test', plugins.sequence('karma'));

// Running `gulp halfTest` in Terminal/Command Line will execute a build, then the test suite using Karma
gulp.task('halfTest', plugins.sequence('setIsMock', 'env:dev', ['copyAssets', 'scripts', 'sass', 'views', 'dependencies'], 'karma'));

// Running `gulp fulltest` in Terminal/Command Line will execute a clean and build, then the test suite using Karma
gulp.task('fullTest', plugins.sequence('clean', 'setIsProd', 'env:prod', ['copyAssets', 'scripts', 'sass', 'views', 'dependencies'], 'karma'));

// Running `gulp dev` in Terminal/Command Line will execute a dev build
// resulting in un-minified javascript and css for deployment to development/staging environments
// gulp-sequence is used to run tasks in a specific order, instead of concurrently which is the default behavior
// `clean` runs first, deleting the contents of the dist directory
// `env` compiles a constant to include app-wide variables
// Then `content`, `scripts`, `styles`, `templates`, and `dependencies` run at the same time
// Finally `browserSync` and `watch` run
// gulp.task('dev', plugins.sequence('setIsMock', 'env:dev', 'sass', 'views'));
gulp.task('qa', plugins.sequence(['setIsMock', 'env:dev', 'scripts', 'copyAssets', 'sass', 'dependencies', 'views']));

gulp.task('dev', plugins.sequence(['setIsMock', 'env:dev', 'scripts', 'copyAssets', 'sass', 'dependencies', 'views'], ['server', 'watch', 'openBrowser']));

// Running `gulp prod` in Terminal/Command Line will execute a production build
// gulp-sequence is used to run tasks in a specific order, instead of concurrently which is the default behavior
// `clean` runs first, deleting the contents of the dist directory
// `env` compiles a constant to include app-wide variables
// Then `content`, `scripts`, `styles`, `templates`, and `dependencies` run at the same time
// Finally `browserSync` and `watch` run
// gulp.task('staging', plugins.sequence('clean', 'env:staging', ['content', 'scripts', 'styles:css', 'templates', 'dependencies'], 'clean:post', 'browserSync', 'watch'));
// gulp.task('staging', plugins.sequence('clean', 'env:staging', 'watch'));

// Running `gulp prod` in Terminal/Command Line will execute a production build
// gulp-sequence is used to run tasks in a specific order, instead of concurrently which is the default behavior
// `clean` runs first, deleting the contents of the dist directory
// `env` compiles a constant to include app-wide variables
// Then `content`, `scripts`, `styles`, `templates`, and `dependencies` run at the same time
// `uglify` minifies the previous generated script/css files
gulp.task('prod', plugins.sequence(['clean', 'setIsProd', 'env:prod', 'scripts', 'copyAssets', 'sass', 'dependencies', 'views'], ['server', 'watch', 'openBrowser']));

// Running `gulp` in Terminal/Command Line will execute the default gulp dev task above
gulp.task('default', ['dev']);