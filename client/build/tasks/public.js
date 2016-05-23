var gulp = require('gulp');
var paths = require('../paths');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

/**
 * Copy dependencies, index and source to node server public directory.
 */
gulp.task('public', function(callback) {
  return runSequence(
    ['copy-jspm', 'copy-index', 'copy-sample-data', 'copy-src'],
    callback
  );
});

gulp.task('clean-public', function() {
  return gulp.src('../server/public')
    .pipe(clean({force: true, read: false}));
});

// temporarily needed until real search endpoint is developed
gulp.task('copy-sample-data', function() {
  return gulp.src('./sample-data/**/*')
    .pipe(gulp.dest(paths.serverPublic + 'sample-data'));
});

gulp.task('copy-index', function() {
  return gulp.src(['./index.html', './config.js'])
    .pipe(gulp.dest(paths.serverPublic));
});

gulp.task('copy-jspm', function() {
  return gulp.src('./jspm_packages/**/*')
    .pipe(gulp.dest(paths.serverPublic + 'jspm_packages/'));
});

gulp.task('copy-src', function() {
  return gulp.src(paths.source)
    .pipe(gulp.dest(paths.serverPublic + 'src/'));
});
