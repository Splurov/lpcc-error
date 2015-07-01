'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var LessPluginCleanCSS = require('less-plugin-clean-css');

var cleancss = new LessPluginCleanCSS({ sourceMapInlineSources: true });

gulp.task('css', function() {
    return gulp.src('example.less')
        .pipe(sourcemaps.init())
        .pipe(less({
                  plugins: [cleancss]
              }))
        .pipe(sourcemaps.write('.', {
                  sourceRoot: 'build/'
              }))
        .pipe(gulp.dest('build/'));
});
