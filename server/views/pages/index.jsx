var React = require('react')
var MainLayout = require('../layouts/mainlayout')

var index = React.createClass({
    render: function() {
        return (
            <MainLayout title={this.props.title}>
                <h1>{this.props.title}</h1>
                <div id="content"></div>
            </MainLayout>
        )
    }
})

module.exports = index
