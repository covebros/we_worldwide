const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);

function styles() {
  return gulp.src(conf.path.src('index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})).on('error', conf.errorHandler('Sass'))
    .pipe(postcss([autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'ie >= 9'] })])).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.path.tmp()))
    .pipe(browserSync.stream());
}
