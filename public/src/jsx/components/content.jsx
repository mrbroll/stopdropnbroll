var React = require('react')

var Content = React.createClass({
    render: function() {
        return (
            <div>{this.props.content}</div>
        )
    }
})

module.exports = Content
