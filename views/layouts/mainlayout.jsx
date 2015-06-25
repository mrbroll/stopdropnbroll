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
                    <footer id="footer">
                        <object type="image/svg+xml" data="/images/menu_icon.svg" height="100" width="100"></object>
                    </footer>
                    <script src="/js/build/main.js"></script>
                </body>
            </html>
        )
    }
})

module.exports = MainLayout
