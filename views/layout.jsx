var React = require('react')
var path = require('path')

var Layout = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    {this.props.children}
                    <script src="/js/main.js"></script>
                </body>
            </html>
        )
    }
})

module.exports = Layout
