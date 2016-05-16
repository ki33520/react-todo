'use strict';
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	nodemon = require('nodemon'),
	path = require('path');


gulp.task('lint', function () {
	gulp.src('./*/**.js').pipe(jshint());
})

gulp.task('cssmin', function () { /* void */ })

gulp.task('afterstart', function () {
	console.log('proc has finished restarting!')
})

gulp.task('start', ['lint'], function () {
	nodemon({
		script: './app.js',
		verbose: true,
        stdout: false,
		env: {
            'HMR_ENABLED': true
        },
		watch: [
			'server/controller','server/mock', 'server/lib', 'server/*.js', 'view'
		],
		ext: 'js html json es6 jsx'
    }).on('restart', function () { /* void */ });
});