var React = require('react');

require('./Note.css');

let Note = React.createClass({
  render: function () {
    let style = { backgroundColor: this.props.color };
    return (
        <div className="note" style={style}>
          <span className="delete-note" onClick={this.props.onDelete}> x </span>
          {this.props.children}
        </div>
    );
  }
});

module.exports = Note;