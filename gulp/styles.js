var $ = require('./common.js');
var config = require('./config.js');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

$.gulp.task('styles', function() {
    var postpros = [ require('autoprefixer')({'browsers': '> 0%'}) ];

    if (config.prod) {
        postpros.push(
            require('csswring')({ preserveHacks: true, removeAllComments: true })
        );
    }

    for (var b = 0; b < config.banners.length; b++) {
        var banner = config.banners[b];

        for (var i = 0; i < config.sizes.length; i++) {
            var size = config.sizes[i];

            $.gulp.src(config.src + 'styles/banners/'+ banner +'/main-' + size + '.scss')
                .pipe($.should(!config.prod, sourcemaps.init()))
                .pipe(sass({
                    percision: 4,
                    includePaths: ['./node_modules']
                }).on('error', $.notify.onError('<%= error.message %>')))
                .pipe(postcss(postpros))
                .pipe($.should(!config.prod, sourcemaps.write()))
                .pipe(rename('main.css'))
                .pipe($.gulp.dest(config.dest + '/'+ banner +'/' + size + '/styles'));
        }
    }

});
