var React = require('react');
var NotesGrid = require('./NotesGrid.jsx');
var NoteEditor = require('./NoteEditor.jsx');

require('./NotesApp.css');

let NotesApp = React.createClass({
  getInitialState: function () {
    return {
      notes: []
    };
  },

  componentDidMount: function () {
    let localNotes = JSON.parse(localStorage.getItem('notes'));

    if (localNotes) {
      this.setState({ notes: localNotes });
    }
  },

  componentDidUpdate: function () {
    this._updateLocalStorage();
  },

  handleNoteDelete: function (note) {
    let noteId = note.id;
    let newNotes = this.state.notes.filter(function (note) {
      return note.id !== noteId;
    });

    this.setState({ notes: newNotes });
  },

  handleNoteAdd: function (newNote) {
    let newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  },

  render: function () {
    return (
        <div className="notes-app">
          <h2 className="app-header">NotesApp</h2>
          <NoteEditor onNoteAdd={this.handleNoteAdd} />
          <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
        </div>
    );
  },

  _updateLocalStorage: function () {
    let notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  }
});

module.exports = NotesApp;