const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('es6', () => {
	browserify('src/app.js')
		.transform('babelify', {
			presets: ['env']
		})
		.bundle()	
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['es6'],() => {
	gulp.watch('src/app.js',['es6'])
});


