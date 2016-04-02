var gulp = require('gulp'),
  // debug = require('gulp-debug'),      // pipe to debug when debugging streams
  runSequence = require('run-sequence'), // If/when gulp 4.0.0 comes out, should no longer be required
  del = require('del'),
  watchify = require('watchify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  assign = require('lodash.assign'),
  browserSync = require('browser-sync'),
  url = require('url'),
  proxy = require('proxy-middleware'),
  handlebars = require('gulp-handlebars'),
  defineModule = require('gulp-define-module'),
  sass = require('gulp-sass');

// TODO:
//  build-config.js to define common paths
//  jshint
//  production/optimized build
//  where to place non optimized bundle, css etc for development, maybe a .tmp dir?

// Nice to have:
//  gulp env to manage environment variables, maybe group them by domains for dev convenience
//  Can we have multiple of the browser syncs on different ports? (to run multple domains at once)

/**
 * Clean up generated files.
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
 */
gulp.task('clean', function() {
  return del([
    './app/src/tellfinder-bundle.js',
    './app/src/tellfinder-bundle.js.map',
    './app/src/compiled-templates/**/*.js'
  ]);
});

/**
 * Fast browserify bundling via watchify.
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 */
var customOpts = {
  entries: ['./app/src/TellfinderEntry.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));
gulp.task('bundle-js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);
function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('tellfinder-bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./app/src'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

/**
 * Start a static server using BrowserSync, with proxy for api requests.
 * http://stackoverflow.com/questions/25410284/gulp-browser-sync-redirect-api-request-via-proxy
 */
gulp.task('browser-sync', function() {
  var domain = process.env.TF_DOMAIN || 'ht',
    domainPort = process.env.TF_PORT || '8080',
    proxyOptions = url.parse('http://localhost:' + domainPort + '/tellfinder-' + domain + '/rest');

  proxyOptions.route = '/api';
  gutil.log('Proxy ' + proxyOptions.route + ' --> ' + proxyOptions.href);

  browserSync({
    open: true,
    port: 3001,
    server: {
      baseDir: 'app',
      index: 'index.html',
      middleware: [proxy(proxyOptions)]
    }
  });
});

/**
 * Precompile handlebars templates as commonjs style modules.
 * https://www.npmjs.com/package/gulp-handlebars
 */
 gulp.task('templates',function() {
  return gulp.src('app/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(defineModule('commonjs'))
    .pipe(gulp.dest('./app/src/compiled-templates/'));
});

/**
 * Compile SASS stylesheets into CSS.
 * https://www.npmjs.com/package/gulp-sass
 */
gulp.task('sass', function() {
  gulp.src('./app/styles/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/compiled-css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * Watch for changes to files and execute associated tasks.
 */
gulp.task('watch',function () {
  gulp.watch('app/templates/**/*.hbs', ['templates']);
  gulp.watch('app/styles/**/*.scss', ['sass']);
});

// TODO Optimize maybe some of these could be in parallel
gulp.task('default', runSequence('clean', 'templates', 'bundle-js', 'sass', 'browser-sync', 'watch'));
