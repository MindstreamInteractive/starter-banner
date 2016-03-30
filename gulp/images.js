var $ = require('./common.js');
var config = require('./config.js');

var imagemin = require('gulp-imagemin');

$.gulp.task('images', function() {
    for (var i = 0; i < config.folders.length; i++) {
        $.gulp.src(config.src + 'images/**/*' + config.folders[i] + '.{png,jpg,jpeg,gif,svg}')
            .pipe($.should(config.prod, imagemin({
                progressive: true,
                interlaced: true
            })))
            .pipe($.gulp.dest(config.dest + config.folders[i] + '/assets'));

        $.gulp.src([config.src + 'images/**/*.{png,jpg,jpeg,gif,svg}', '!' + config.src + 'images/**/*0.{png,jpg,jpeg,gif,svg}'])
            .pipe($.should(config.prod, imagemin({
                progressive: true,
                interlaced: true
            })))
            .pipe($.gulp.dest(config.dest + config.folders[i] + '/assets'));
    }
});
