var $ = require('./common.js');
var config = require('./config.js');

var fileinclude = require('gulp-file-include');

$.gulp.task('views', function() {
    for (var b = 0; b < config.banners.length; b++) {
        var banner = config.banners[b];

		for (var i = 0; i < config.sizes.length; i++) {
            var size = config.sizes[i];

            $.gulp.src([config.src + 'views/banners/'+ banner +'/'+ size +'/**/*.html'])
                .pipe(fileinclude({
                    prefix: '@@',
                    basepath: '@file'
                }))
                .pipe($.gulp.dest(config.dest + '/' + banner + '/' + '/' + size));
        }
    }
});
