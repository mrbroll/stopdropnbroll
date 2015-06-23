var gulp = require('gulp')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')
var path = require('path')

var src = {
    js: path.join(__dirname, 'src', 'js'),
    jsx: path.join(__dirname, 'src', 'jsx')
}

var build = {
    js: path.join(__dirname, 'build', 'js'),
    jsx: path.join(__dirname, 'build', 'jsx')
}

gulp.task('browserify', function() {
    var b = browserify([path.join(src.js, 'main.js')], {
        debug: true
    })
    b.transform(reactify)
    return b.bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(build.js))
})
