var $ = require('./common.js');
var config = require('./config.js');

var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

$.gulp.task('lint-js', function() {
	return $.gulp.src(config.src + 'scripts/**/*.js')
		.pipe(jshint())
		.pipe($.notify(function (file) {
			if (file.jshint.success) return false;
			var errors = file.jshint.results.map(function (data) {
				if (data.error) return '(' + data.error.line + ') ' + data.error.reason;
			}).join('\n');
			return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
		}));
});


$.gulp.task('scripts', ['lint-js'], function() {
    for (var b = 0; b < config.banners.length; b++) {
        var banner = config.banners[b];

		for (var i = 0; i < config.sizes.length; i++) {
			var size = config.sizes[i];

			$.gulp.src([config.src + 'scripts/main.js', config.src + 'scripts/'+ banner +'/main-' + size + '.js'])
		        .pipe($.plumber())
				.pipe(concat('main.js'))
		        .pipe($.should(config.prod, uglify()))
				.pipe($.gulp.dest(config.dest + '/' + banner + '/' + size + '/scripts'));

			// Copy manifest.js files
			$.gulp.src(config.src + 'views/banners/' + banner + '/' + size + '/manifest.js')
				.pipe($.plumber())
				.pipe($.gulp.dest(config.dest + '/' + banner + '/' + size));
		}
	}
});
