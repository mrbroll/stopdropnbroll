var React = require('react')
var Content = require('../../jsx/src/components/content.jsx')
var SearchBar = require('../../jsx/src/components/search-bar.jsx')


function init() {
    React.render (
        <Content content="this is content" />,
        document.getElementById('content')
    )

    React.render (
        <SearchBar />,
        document.getElementById('header')
    )
}

init()
