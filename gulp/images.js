var $ = require('./common.js');
var config = require('./config.js');

var imagemin = require('gulp-imagemin');

$.gulp.task('images', function() {
    for (var b = 0; b < config.banners.length; b++) {
        var banner = config.banners[b];

        for (var i = 0; i < config.sizes.length; i++) {
            var size = config.sizes[i];

            $.gulp.src(config.src + 'images/'+ banner +'/**/*' + size + '.{png,jpg,jpeg,gif,svg}')
                .pipe($.should(config.prod, imagemin({
                    progressive: true,
                    interlaced: true
                })))
                .pipe($.gulp.dest(config.dest + '/'+ banner + '/' + size + '/images'));

            $.gulp.src([config.src + 'images/'+ banner +'/**/*.{png,jpg,jpeg,gif,svg}', '!' + config.src + 'images/'+ banner +'/**/*0.{png,jpg,jpeg,gif,svg}'])
                .pipe($.should(config.prod, imagemin({
                    progressive: true,
                    interlaced: true
                })))
                .pipe($.gulp.dest(config.dest + '/'+ banner +'/' + size + '/images'));
        }
    }
});
