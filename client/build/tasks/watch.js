var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
// gulp.task('watch', ['serve', 'public'], function() {
gulp.task('watch', ['build', 'public'], function() {
  gulp.watch(paths.source, ['build-system', 'copy-src', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.scss, ['build-css', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.compiledCss, function() {
    return gulp.src(paths.compiledCss)
      .pipe(browserSync.stream());
  }).on('change', reportChange);
});

gulp.task('default', function(callback) {
  return runSequence(
    'clean-public',
    ['watch'],
    callback
  );
});
