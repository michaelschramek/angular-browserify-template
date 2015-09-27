var gulp = require('gulp');
var browserify = require('browserify');
var ngAnnotate = require('ng-annotate');
var gutil = require('gulp-util');

gulp.task('default', function() {
  // place code for your default task here
  console.log('hello');
});


gulp.task('build-js', ['default'], function() { 
    var bfy = browserify({
        debug: true,
        //transform: [ngAnnotate],
        entries: './index.js',
        paths: ['./js']
    });
    return bfy.bundle()
        .pipe(gulp.src('bundle.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('./dist/js/'));
});