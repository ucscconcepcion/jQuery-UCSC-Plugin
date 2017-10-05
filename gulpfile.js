var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  js: 'jquery.ucsc.js'
};


gulp.task('js', function() {
  
  gulp.src(paths.js)
  .pipe(concat('libjs'))
  .pipe(uglyfy())
  .pipe(gulp.dest('minjs'));

});

gulp.task('default',['js']);
