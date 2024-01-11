const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile Sass to CSS
gulp.task('sass', function () {
  return gulp.src('styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Serve and watch for changes
gulp.task('serve', gulp.series('sass', function () {
  browserSync.init({
    server: './'
  });

  gulp.watch('styles/*.scss', gulp.series('sass'));
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
}));

// Default task
gulp.task('default', gulp.series('serve'));
