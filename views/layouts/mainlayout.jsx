var React = require('react')

var MainLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/sass/build/main.css" />
                </head>
                <body>
                    <header id="header"></header>
                    {this.props.children}
                    <footer id="footer"></footer>
                    <script src="/js/build/main.js"></script>
                </body>
            </html>
        )
    }
})

module.exports = MainLayout
