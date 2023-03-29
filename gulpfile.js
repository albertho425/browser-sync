const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch(done) {
    browserSync.init({
      //add your own Local website link below
      proxy: "https://maple-syrup-web-2.local/",
    });
    gulp.watch('./**/*.css').on('change',browserSync.reload);
    gulp.watch('js/*.js').on('change',browserSync.reload);
    gulp.watch('./**/*.php').on('change',browserSync.reload);

    done();
}

exports.watch = watch;
