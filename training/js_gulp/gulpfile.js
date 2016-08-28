var gulp = require('gulp'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
imagemin = require('gulp-imagemin'),
concat = require('gulp-concat'),
watch = require('gulp-watch');


var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/lib/*.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/styles/*.scss',
        img: 'src/imgs/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/*.html',
        js: 'src/lib/**/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/imgs/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
    	.pipe(concat('script.js'))
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        //.pipe(reload({stream: true})); //И перезагрузим сервер
});


gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(gulp.dest(path.build.css)) //И в build
        //.pipe(reload({stream: true}));
});


gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true
            //svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant()],
            //interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        //.pipe(reload({stream: true}));
});


gulp.task('watch', function(){
    // watch([path.watch.html], function(event, cb) {
    //     gulp.start('html:build');
    // });
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


