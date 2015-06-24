var React = require('react')

var MainLayout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <object type="image/svg+xml" data="/images/search_icon.svg" height="100" width="100"></object>
                    </header>
                    {this.props.children}
                    <footer>
                        <object type="image/svg+xml" data="/images/menu_icon.svg" height="100" width="100"></object>
                    </footer>
                    <script src="/js/main.js"></script>
                </body>
            </html>
        )
    }
})

module.exports = MainLayout
