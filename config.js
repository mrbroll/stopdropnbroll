var path = require('path')

var src = {
    base: path.join(__dirname, 'src'),
    js: path.join(__dirname, 'src', 'public', 'js'),
    jsx: path.join(__dirname, 'src', 'public', 'jsx')
}

var build = {
    js: path.join(__dirname, 'build', 'public', 'js'),
    jsx: path.join(__dirname, 'build', 'public', 'jsx')
}

module.exports = {
    paths: [ src, build ]
}
