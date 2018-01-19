let Note = React.createClass({
  render: function () {
    let style = {backgroundColor: this.props.color};
    return (
        <div className="note" style={style}>
          <span className="delete-note"> x </span>
          {this.props.children}
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
      gutter: 10
    });
  },

  render: function () {
    return (
        <div className="notes-grid" ref="grid">
          {
            this.props.notes.map(function (note) {
              return <Note key={note.id} color={note.color}> {note.text} </Note>
            })
          }
        </div>
  );
  }
});

let NoteEditor = React.createClass({
  render: function () {
    return (
        <div className="note-editor">
          <textarea className="textarea"
              placeholder="Enter your note here..."
              rows={5}
          />
          <button className="add-button">Add</button>
        </div>
    );
  }
});

let NotesApp = React.createClass({
  getInitialState: function () {
    return {
      notes: [
        {
          id: 0,
          text: "This is first note",
          color: "#fdab43"
        }, {
          id: 1,
          text: "This is second note",
          color: "#abcd43"
        }, {
          id: 2,
          text: "This is third note",
          color: "#43abcd"
        }
      ]
    };
  },

  render: function () {
    return (
        <div className="notes-app">
        <h2 className="app-header">NotesApp</h2>
        <NoteEditor />
        <NotesGrid notes={this.state.notes} />
        </div>
  );
  }
});

ReactDOM.render(
    <NotesApp/>,
    document.getElementById('mount-point')
);
