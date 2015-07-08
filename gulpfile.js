var path = require('path')
var gulp = require('gulp')
var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')
var sass = require('gulp-sass')
var bourbon = require('node-bourbon')
var neat = require('node-neat')
var autoprefixer = require('gulp-autoprefixer')
var server = require('gulp-develop-server')

var publicPath = path.join(__dirname, 'public')
var serverPath = path.join(__dirname, 'server')

var paths = {
    js: {
        src: path.join(publicPath, 'js', 'src'),
        build: path.join(publicPath, 'js', 'build'),
        watch: path.join(publicPath, 'js', 'src', '**', '*.js')
    },
    jsx: {
        src: path.join(publicPath, 'jsx', 'src'),
        build: path.join(publicPath, 'jsx', 'build'),
        watch: path.join(publicPath, 'jsx', 'src', '**', '*.jsx')
    },
    sass: {
        src: path.join(publicPath, 'sass', 'src'),
        build: path.join(publicPath, 'sass', 'build'),
        watch: path.join(publicPath, 'sass', 'src', '**', '*.scss')
    },
    server: {
        views: path.join(serverPath, 'views'),
        app: path.join(serverPath, 'app.js'),
        viewsWatch: path.join(serverPath, 'views', '**', '*.jsx'),
        watch: path.join(serverPath, '**', '*.js')
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
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.sass.build))
})

gulp.task('server:start', function() {
    server.listen({ path: paths.server.app, execArgv: [ '--harmony' ] })
})

gulp.task('watch', function() {
    gulp.watch(paths.sass.watch, ['sass'])
    gulp.watch(paths.js.watch, ['browserify'])
    gulp.watch(paths.jsx.watch, ['browserify'])
    gulp.watch([ paths.server.app, paths.server.watch, paths.server.viewsWatch ], server.restart)
})

gulp.task('default', [ 'watch', 'sass', 'browserify', 'server:start' ])
