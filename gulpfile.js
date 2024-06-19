var gulp = require("gulp");
var sass = require("gulp-sass");
var dartsass = require("gulp-dart-sass");
var browserSync = require("browser-sync").create();
var sourcemaps = require("gulp-sourcemaps");
var gcmq = require("gulp-group-css-media-queries");
var cleanCSS = require("gulp-clean-css");
// var modRewrite = require("connect-modrewrite");

// sass.compiler = require('node-sass');
/* task to convert sass to minifies css and generate map files resp. */
gulp.task("sass", function () {
  return (
    gulp
      .src("public/sass/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(dartsass())
      // .pipe(gcmq())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("public/css"))
  );
});
/* task to group-css-media-queries */
gulp.task("gcmq", function () {
  return gulp
    .src("public/css/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
});

/* task to reload browser automatically after the changes in file. */
gulp.task("serve", function () {
  browserSync.init({
    injectChanges: true,
    watch: true,
    server: {
      // baseDir: "static-html",
      routes: {
        "/images": "images",
        "/fonts": "fonts",
      },
    },
  });
  gulp.watch("public/sass/**/*.scss", gulp.series("sass"));
});

/* task to generate and watch css for the first time */
gulp.task("default", gulp.series("serve"));
