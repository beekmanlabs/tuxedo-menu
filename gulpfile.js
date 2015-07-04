'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var uglifySaveLicense = require('uglify-save-license');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var options = {
    src: './src',
    dist: './dist',
    errorHandler: function(title) {
        return function(err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    }
};

gulp.task('css', function () {
    return gulp.src(options.src + '/**/*.scss')
        .pipe(compass({
            css: options.dist,
            sass: options.src
        }))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe(autoprefixer({browsers: ['last 2 versions', 'Explorer 9']}))
        .pipe(gulp.dest(options.dist))
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(options.dist));
});

gulp.task('js', function () {
    return gulp.src(options.src + '/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(options.dist))
        .pipe(sourcemaps.init())
        .pipe(uglify({ preserveComments: uglifySaveLicense })).on('error', options.errorHandler('Uglify'))
        .pipe(sourcemaps.write())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(options.dist));
});

gulp.task('default', ['css', 'js']);

gulp.task('watch', function () {
    gulp.watch(options.src + '/**/*.scss', ['css']);
    gulp.watch(options.src + '/*.js', ['js']);
});
