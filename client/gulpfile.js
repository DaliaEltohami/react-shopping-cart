const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

// gulp.task("sass", async function () {
//   gulp.src("src/components/**/*.scss").pipe(sass()).pipe(gulp.dest("src/css"));
// });

gulp.task("watch-sass", async function () {
  gulp.watch(
    ["src/components/**/*.scss", "src/pages/**/*.scss"],
    async function () {
      gulp
        .src(["src/components/**/*.scss", "src/pages/**/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
    }
  );
});
