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

let NoteEditor = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    };
  },

  handleTextChange: function (event) {
    this.setState({ text: event.target.value });
  },

  handleNoteAdd: function () {
    let newNote = {
      id: Date.now(),
      text: this.state.text,
      color: '#8affe6'
    };

    this.props.onNoteAdd(newNote);
    this.setState({ text: '' });
  },

  render: function () {
    return (
        <div className="note-editor">
          <textarea className="textarea"
            placeholder="Enter your note here..."
            rows={5}
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
        </div>
    );
  }
});

let NotesGrid = React.createClass({
  componentDidMount: function () {
    const grid = this.refs.grid;
    this.msnry = new Masonry( grid, {
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true
    });
  },

  componentDidUpdate: function (prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  },

  render: function () {
    let onNoteDelete = this.props.onNoteDelete;

    return (
        <div className="notes-grid" ref="grid">
          {
            this.props.notes.map(function(note) {
              return (
                  <Note key={note.id} onDelete={onNoteDelete.bind(null, note)} color={note.color}>
                    {note.text}
                  </Note>
              );
            })
          }
        </div>
    );
  }
});

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

ReactDOM.render(
    <NotesApp/>,
    document.getElementById('mount-point')
);
