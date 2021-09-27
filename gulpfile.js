const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

function copyHTML() {
  return src('./src/index.html').pipe(dest('./dist'));
}

function copyJS() {
  return src('./src/js/modal.js').pipe(dest('./dist/js'));
}

function compilecss() {
  return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(dest('./dist/css'));
}

function watchTask() {
  watch('./src/index.html', copyHTML);
  watch('./src/js/modal.js', copyJS);
  watch('./src/scss/**/*.scss', compilecss);
}

exports.default = series(copyHTML, copyJS, compilecss, watchTask);
