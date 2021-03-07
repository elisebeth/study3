let gulp = require("gulp");
let stylus = require("gulp-stylus");

gulp.task("cmp", function () {
  gulp
    .src("./layout/styles/style.styl")
    .pipe(stylus())
    .pipe(gulp.dest("./layout/styles"));
});
