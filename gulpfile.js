var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');


gulp.task('default', function(){
    console.log("Hooray you created a gulp task");
});

gulp.task('html', function(){
    console.log("Imagine something useful happens to you html here");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) // volgorde is belangrijk
    .pipe(gulp.dest('./app/temp/styles'));    
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html'); // start de taak 'html'
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles'); // start de taak 'styles'
    });
});