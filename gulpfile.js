// gulp
var gulp = require('gulp');

// tools
var del = require('del');
var runSequence = require('run-sequence');
var brfs = require('brfs');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

// tasks
gulp.task('lint', function () {
  gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function () {
  return del(['./dist/*', './app/js/bundled.js']);
});
gulp.task('minify-css', function () {
  var opts = { comments: true, spare: true };
  gulp.src('./app/**/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('copy-img-files', function () {
  gulp.src('./app/img/*')
    .pipe(gulp.dest('dist/img/'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});
gulp.task('browserify', function() {
  gulp.src(['./app/index.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true,
    transform: ['brfs']
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./app/js'))
});
gulp.task('browserifyDist', function() {
  gulp.src(['./app/index.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true,
    transform: ['brfs']
  }))
  .pipe(concat('bundled.js'))
  .pipe(uglify({
    // inSourceMap:
    // outSourceMap: "app.js.map"
  }))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('js-watcher', function() {
  gulp.watch(['./app/components/**'], ['browserify']);
});

// default task
gulp.task('default', function () {
  runSequence(
    ['clean'],
    ['lint', 'browserify', 'connect'],
    ['js-watcher']
  );
});

// build task
gulp.task('build', function () {
  runSequence(
    ['clean'],
    ['minify-css', 'browserifyDist', 'copy-html-files', 'copy-img-files']
  );
});
