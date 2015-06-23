var React = require('react')
var Content = require('../jsx/components/content.jsx')

function init() {
    React.render (
        <Content content="this is content" />,
        document.getElementById('content')
    )
}

init()
