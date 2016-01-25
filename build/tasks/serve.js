(function () {
    'use strict';

    var gulp = require('gulp');
    var paths = require('../paths');
    var browserSync = require('browser-sync').create();

    gulp.task('serve', function () {
        browserSync.init({
            server: {
                baseDir: paths.dst
            }
        });

        gulp.watch(paths.dst.concat('**/*')).on('change', browserSync.reload);
    });

})();
