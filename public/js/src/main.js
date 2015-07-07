var React = require('react')
var Content = require('../../jsx/src/components/content.jsx')
var SearchBar = require('../../jsx/src/components/search-bar.jsx')
var MenuButton = require('../../jsx/src/components/menu-button.jsx')


function init() {
    React.render (
        <Content content="this is content" />,
        document.getElementById('content')
    )

    React.render (
        <SearchBar />,
        document.getElementById('header')
    )

    React.render (
        <MenuButton />,
        document.getElementById('footer')
    )
}

init()
