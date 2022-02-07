const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const minify=require('gulp-minify');
const browsersync=require('browser-sync').create();
// const imagemin = require('gulp-imagemin');
// const cache = require('gulp-cache');

// gulp.task('style',()=>{
//   return gulp.src('scss/final.scss')
//   .pipe(sass().on('error',sass.logError))
//   .pipe(gulp.dest('css'))
// })





// (upperone or this one )
// this code not only convert scss into css but also
// it minify our css file
// gulp.task('style',()=>{
//   return gulp.src('scss/*.scss')
//   .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
//   .pipe(gulp.dest('css'))
// })




// this code basically actlike nodemon
// it convert scss file continiously
//  unless and until we stop our watch job
// gulp.task('watch',()=>{
//   return gulp.watch('scss/*.scss',(done)=>{
//     gulp.series(['style']) (done)
//   })

// })


// this code is basically used for minfy js files
// gulp.task('minify',()=>{
//   return gulp.src('js/*.js')
//   .pipe(minify())
//   .pipe(gulp.dest('js'))
// })


//new code

// gulp.task('style',()=>{
//   return gulp.src('scss/final.scss')
//     .pipe(sass().on('error',sass.logError))
//     .pipe(gulp.dest('css'))
//     .pipe(browsersync.stream());
// });

// gulp.task('serve',gulp.series('style'),()=>{
//   browsersync.init({
//     server:'./'
//   })
//   gulp.watch('./scss/final.scss',['style'])
//   gulp.watch('./*.html').on('chnage',browsersync.reload);
// });

// gulp.task('default',gulp.series('serve'));


function style(){
  return gulp.src('./app/scss/style.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./app/css'))
  .pipe(browsersync.stream());

  }


  function watch(){
     browsersync.init({
                  server:{
                     baseDir:'./app'
                       }
      });

      gulp.watch('./app/scss/**/*.scss',style);
      gulp.watch('./*.html').on('change',browsersync.reload);
      gulp.watch('./app/js/**/*.js').on('change',browsersync.reload);
  }

  exports.style=style;
  exports.watch=watch;


