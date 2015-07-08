var React = require('react')

var MenuButton = React.createClass({
    render: function() {
        return (
            <button className="menu-button x" type="button" role="button" aria-label="Toggle Navigation" onClick={this.handleClick}>
                <span className="lines"></span>
            </button>
        )
    },
    handleClick: function(e) {
        e.preventDefault();
        this.getDOMNode().classList.toggle('close')
    }
})

module.exports = MenuButton
