//Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

//Defining gulp tasks here
gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./sass/**/*.scss',['styles']);
});
