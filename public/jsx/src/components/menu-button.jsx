var React = require('react')

var MenuButton = React.createClass({
    render: function() {
        return (
            <div id="menu-container" onClick={this.handleClick}>
              <div id="circle">
                <div id="rectangle-container">
                  <div className="rectangle top"></div>
                  <div className="rectangle middle"></div>
                  <div className="rectangle bottom"></div>
                </div>
              </div>
            </div>
        )
    },
    handleClick: function(e) {
        e.preventDefault();
        this.getDOMNode().classList.toggle('open')
    }
})

module.exports = MenuButton
