var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var url = require('url');
var proxy = require('proxy-middleware');


// this task utilizes the browsersync plugin
// to create a dev server instance at http://localhost:9000
// api requests are proxied to the nomjs-search server
gulp.task('serve', ['build'], function(done) {
  var proxyOptions = url.parse('http://0.0.0.0:9081');
  proxyOptions.route = '/api';
  gutil.log('Proxy ' + proxyOptions.route + ' --> ' + proxyOptions.href);
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: [proxy(proxyOptions)]
    }
  }, done);
});

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve-bundle', ['bundle'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
