var $ = require('./common.js');
var config = require('./config.js');

$.gulp.task('copy', function() {
    // Static banners
    $.gulp.src(config.src + 'static/**/*')
        .pipe($.changed(config.dest + 'static'))
        .pipe($.gulp.dest(config.dest + 'static'));

    $.gulp.src(config.src + 'views/index.html')
        .pipe($.gulp.dest(config.dest));
});
