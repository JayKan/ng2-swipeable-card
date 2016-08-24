'use strict';

const gulp = require('gulp');
const path = require('path');
const sass = require("gulp-sass");

gulp.task('copy', () => {
  return gulp.src([
    path.join('src/lib/swipeable-card', '**', '*.scss'),
    '!' + path.join('src/swipeable-card', '**', '*.ts')
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/swipeable-card'));
});