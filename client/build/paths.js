var appRoot = 'src/';
var stylesRoot = 'styles/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/styles.scss',
  css: stylesRoot,
  compiledCss: '**/*.css',
  scss: stylesRoot + '**/*.scss',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
