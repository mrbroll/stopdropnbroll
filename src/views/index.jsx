var React = require('react')
var Layout = require('./layout')

var index = React.createClass({
    render: function() {
        return (
            <Layout title={this.props.title}>
                <h1>{this.props.title}</h1>
                <p>Well, it looks like this worked!!!</p>
                <div id="content"></div>
            </Layout>
        )
    }
})

module.exports = index
