'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require("gulp-sass");

gulp.task('copy', () => {
  return gulp.src([
    path.join('src/lib/card', '**', '*.scss'),
    '!' + path.join('src/lib', '**', '*.ts')
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/card'));
});