var $ = require('./common.js');
var config = require('./config.js');

var fileinclude = require('gulp-file-include');

$.gulp.task('views', function() {

        $.gulp.src([config.src + 'views/templates/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe($.gulp.dest(config.dest));

});
