var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


gulp.task('watch', function () {
    browserSync.init({
        notify: false, // zet de 'injected css' melding uit die verschijnt recht boven in de browser.
        server: {
            baseDir: 'app'
        }
    });
    watch('./app/index.html', function () { // kijk naar deze file en start een taak zodra deze gesaved wordt
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject'); // start de taak 'styles'
    });
});


gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream()); // injecteert css code zonder een reload van de browser. Dit is vooral handig wanneer je werkt met javascript
});