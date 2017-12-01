var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');
;

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer])) // volgorde is belangrijk
        .on('error', function(errorInfo){ // wanneer er een error plaatsvindt on('error'), console.log de errorInfo 
            console.log(errorInfo.toString());
            this.emit('end'); 
        })
        .pipe(gulp.dest('./app/temp/styles'));
});