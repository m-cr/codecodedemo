var gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
inject = require('gulp-inject'),
runSequence = require('run-sequence'),
config = require('../config');


gulp.task('semanticcss', function () {
gulp.src(config.frameworkSass.src)
  .pipe(inject(gulp.src(['./inject/semanticcss.txt']), {
    starttag: '// inject:framework',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkSass.dest));
});

gulp.task('semanticjs', function () {
gulp.src(config.frameworkJs.src)
  .pipe(inject(gulp.src(['./inject/semanticjs.txt']), {
    starttag: '// inject:framework',
    endtag: '// endinject',
    transform: function (filePath, file) {
      // return file contents as string
      return file.contents.toString('utf8')
    }
  }))
  .pipe(gulp.dest(config.frameworkJs.dest));
});


gulp.task('semantic', function(callback) {
  runSequence(
    ['semanticcss'],
    ['semanticjs'],
    callback
    );
});

