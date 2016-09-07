'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    spritesmith  = require('gulp.spritesmith');

var path = {
    build: {
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
    },
    src: {
        js: 'src/js/*.js',
        style: 'src/sass/*.scss',
        img: 'src/img/*.*',
    },
    watch: { 
        js: 'src/js/*.js',
        style: 'src/sass/*.scss',
        img: 'src/img/*.*',
    },
    clean: './build'
};

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(concat('script.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({ 
            progressive: true
        }))
        .pipe(gulp.dest(path.build.img))
});


gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('src/sprite/*.*')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                cssFormat: 'css',
                algorithm: 'binary-tree',
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            }));

    spriteData.img.pipe(gulp.dest('build/sprite/'));
    spriteData.css.pipe(gulp.dest('src/sprite/'));
});



gulp.task('watch', function(){
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
});


gulp.task('build', [
    'js:build',
    'style:build',
    'image:build'
]);