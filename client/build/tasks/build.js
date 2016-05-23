var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
// var del = require('del');
// var vinylPaths = require('vinyl-paths');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output))
    .pipe(gulp.dest(paths.serverPublic + 'dist/'));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output))
    .pipe(gulp.dest(paths.serverPublic + 'dist/'));
});

// compiles sass and copies css to the source directory
// because link rel from index.html only works from there
gulp.task('build-css', function() {
  gulp.src(paths.style)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css))
    .pipe(gulp.dest(paths.serverPublic + 'styles/'))
    .pipe(browserSync.stream());
});

gulp.task('build-css-min', function() {
  gulp.src(paths.style)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream());
});

gulp.task('copy-public', function(callback) {
  return runSequence(
    'clean-public',
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
  gulp.src(['./index.html', './config.js'])
    .pipe(gulp.dest(paths.serverPublic));
});

gulp.task('copy-jspm', function() {
  gulp.src('./jspm_packages/**/*')
    .pipe(gulp.dest(paths.serverPublic + 'jspm_packages/'));
});

gulp.task('copy-src', function() {
  gulp.src(paths.source)
    .pipe(gulp.dest(paths.serverPublic + 'src/'));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css'],
    callback
  );
});

gulp.task('build-min', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css-min'],
    callback
  );
});
