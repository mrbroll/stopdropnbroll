var React = require('react')

var MainLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/styles/build/main.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
