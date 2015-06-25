var path = require('path')
var gulp = require('gulp')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')
var sass = require('gulp-sass')
var bourbon = require('node-bourbon')
var neat = require('node-neat')

var paths = {
    js: {
        src: path.join(__dirname, 'js', 'src'),
        build: path.join(__dirname, 'js', 'build')
    },
    jsx: {
        src: path.join(__dirname, 'jsx', 'src'),
        build: path.join(__dirname, 'jsx', 'build')
    },
    sass: {
        src: path.join(__dirname, 'sass', 'src'),
        build: path.join(__dirname, 'sass', 'build')
    }
}

gulp.task('browserify', function() {
    var b = browserify([path.join(paths.js.src, 'main.js')], {
        debug: true
    })
    b.transform(reactify)
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.js.build))
})

gulp.task('sass', function() {
    gulp.src(path.join(paths.sass.src, 'main.scss'))
        .pipe(sass({
            includePaths: neat.includePaths
        }))
        .pipe(gulp.dest(path.join(paths.sass.build)))
})
