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
var del = require('del');
var vinylPaths = require('vinyl-paths');

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
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// compiles sass and copies css to the source directory
// because link rel from index.html only works from there
gulp.task('build-css', function() {
  gulp.src(paths.style)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css))
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

// TODO move to all the copy tasks to separate tasks file
gulp.task('copy-public', ['clean-public', 'copy-dist', 'copy-index', 'copy-jspm']);

// FIXME not cleaning
gulp.task('clean-public', function() {
  return new Promise(function(resolve, reject) {
    var vp = vinylPaths();
    gulp.src([paths.serverPublic + '/**/*'])
      .pipe(vp)
      .on('end', function() {
        del(vp.paths, {force: true}).then(resolve).catch(reject);
      });
  });
});

gulp.task('copy-dist', function() {
  gulp.src(paths.output + '**/*')
    .pipe(gulp.dest(paths.serverPublic + 'dist/'));
});

gulp.task('copy-index', function() {
  gulp.src(['./index.html', './config.js'])
    .pipe(gulp.dest(paths.serverPublic));
});

gulp.task('copy-jspm', function() {
  gulp.src('./jspm_packages/**/*')
    .pipe(gulp.dest(paths.serverPublic + 'jspm_packages/'));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css', 'copy-public'],
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
