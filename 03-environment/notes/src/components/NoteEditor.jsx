var React = require('react');

require('./NoteEditor.css');

let NoteEditor = React.createClass({
  getInitialState: function () {
    return {
      text: '',
      color: '#44c767'
    };
  },

  handleTextChange: function (event) {
    this.setState({ text: event.target.value });
  },

  handleNoteAdd: function () {
    let newNote = {
      id: Date.now(),
      text: this.state.text,
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
  },

  handleChangeColor: function (event) {
    this.setState({ color: event.target.value});
  },

  render: function () {
    let style = { backgroundColor: this.state.color };
    return (
        <div className="note-editor">
          <textarea className="textarea"
                    placeholder="Enter your note here..."
                    rows={5}
                    value={this.state.text}
                    onChange={this.handleTextChange}
          />
          <input type="color" onChange={this.handleChangeColor} value={this.state.color} style={style} />
          <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
        </div>
    );
  }
});

module.exports = NoteEditor;