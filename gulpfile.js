const path = require('path')
const fs = require('fs')
const gulp = require('gulp')
const rollup = require('rollup')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')
const less = require('gulp-less')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const eslint = require('rollup-plugin-eslint')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssgrace = require('cssgrace')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const gulpReplace = require('gulp-replace')

// 处理 css
gulp.task('css', () => {
    return gulp.src('./src/less/**.less')
        .pipe(less())
        // 产出的未压缩的文件名
        .pipe(concat('style.css'))
        // 配置 postcss
        .pipe(postcss([
            autoprefixer,
            cssgrace
        ]))
        // 产出文件的位置
        .pipe(gulp.dest('./build/css'))
        // 产出的压缩后的文件名
        .pipe(rename('style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'))
})

// 处理 JS
gulp.task('script', () => {
    // rollup 打包 js 模块
    return rollup.rollup({
        // 入口文件
        input: './src/js/index.js',
        plugins: [
            resolve(),
            babel({
                exclude: 'node_modules/**' // only transpile our source code
            })
        ]
    }).then(bundle => {
        bundle.write({
            // 产出文件使用 umd 规范（即兼容 amd cjs 和 iife）
            format: 'umd',
            // iife 规范下的全局变量名称
            name: 'prince',
            // 产出的未压缩的文件名
            file: './build/js/script.js',
            // sourcemap: true
        }).then(() => {
            // 待 rollup 打包 js 完毕之后，再进行如下的处理：
            gulp.src('./build/js/script.js')
                .pipe(gulp.dest('./build/js'))
                .pipe(sourcemaps.init())
                // 压缩
                .pipe(uglify())
                // 产出的压缩的文件名
                .pipe(rename('script.min.js'))
                // 生成 sourcemap
                .pipe(sourcemaps.write(''))
                .pipe(gulp.dest('./build/js'))
        })
    })
})

gulp.task('watch', () => {
    gulp.watch('./src/js/*.js', gulp.series('script'))
    gulp.watch('./src/less/*.less', gulp.series('css', 'script'))
})

// gulp.task('default', ['css', 'script'])
gulp.task('default', gulp.series('css', 'script'))
