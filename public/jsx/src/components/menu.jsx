var React = require('react')
var SearchBar = require('./search-bar.jsx')

var MenuButton = React.createClass({
    render: function() {
        return (
            <button className="menu-button x" type="button" role="button" aria-label="Toggle Navigation" onClick={this.handleClick}>
                <span className="lines"></span>
            </button>
        )
    },
    handleClick: function(e) {
        e.stopPropagation()
        this.getDOMNode().classList.toggle('close')
        document.getElementById('menu').classList.toggle('open')
    }
})

var Menu = React.createClass({
    render: function() {
        return (
            <div id="menu">
                <div className="menu-items">
                    <div className="menu-item">Menu Item 0</div>
                    <div className="menu-item">Menu Item 1</div>
                    <div className="menu-item">Menu Item 2</div>
                    <div className="menu-item">Menu Item 3</div>
                </div>
                <MenuButton />
            </div>
        )
    }
})

module.exports = Menu
