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
	for (var i = 0; i < config.folders.length; i++) {
	    $.gulp.src(config.src + 'scripts/main-' + config.folders[i] + '.js')
	        .pipe($.plumber())
	        .pipe($.should(config.prod, uglify()))
			.pipe(rename('main.js'))
	        .pipe($.gulp.dest(config.dest + config.folders[i] + '/js/'));
	}
});
