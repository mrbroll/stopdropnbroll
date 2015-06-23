var app = require('koa')()
var router = require('koa-router')()
var react = require('koa-react-view')
var serve = require('koa-static')
var path = require('path')

var viewPath = path.join(__dirname, 'views')
var publicPath = path.join(__dirname, 'public', 'build')

react(app, {
    views: viewPath,
    babel: {
        only: [
            viewPath
        ]
    }
})

router
    .get('/', function *(next) {
        this.render('index', { title: 'Test Title' })
    })
    .get('/content', function *(next) {
        this.response.body = { content: 'this is test content' }
    })

app
    .use(serve(publicPath))
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(3000)
console.log('server listening at localhost:3000')
