var React = require('react')

var SearchBar = React.createClass({
    render: function() {
        return (
            <div className="search-container">
                <input type="text" onFocus={this.handleFocus} onBlur={this.handleBlur} className="search-input" />
                <div className="search-handle"></div>
            </div>
        )
    },
    handleFocus: function(e) {
        this.getDOMNode().classList.add('expand')
    },
    handleBlur: function(e) {
        this.getDOMNode().classList.remove('expand')
    }
})

module.exports = SearchBar
