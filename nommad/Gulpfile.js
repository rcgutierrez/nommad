//Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

//Defining gulp tasks here
gulp.task('styles', function() {
    gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./public/sass/**/*.scss',['styles']);
});
