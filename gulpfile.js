var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    connect     = require('gulp-connect'),
    browserSync = require('browser-sync').create(),
    watch       = require('gulp-watch');

var sassPaths = ['src/sass'];
var htmlSources =['src/*.html'];
var sassSources =['src/sass/*.scss'];
var jsSources = ['src/js/*.js'];
var allSources = htmlSources.concat(jsSources).concat(sassSources);

gulp.task('webserver', function() {
  connect.server({
    root: ['src'],
    port: 8000,
    base: 'http://localhost',
    livereload: true
  });
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

gulp.task('html', function () {
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('src/js/*.js')
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload());
});


gulp.task('watch', ['sass','html', 'js'], function() {
  //gulp.watch(['*.html'], ['html']);
  gulp.watch(['src/*.html'], ['html']);
  gulp.watch(['src/sass/*.scss'], ['sass']);
  gulp.watch(['src/js/*.js'], ['js']);
});


gulp.task('default', ['sass', 'webserver', 'watch']);