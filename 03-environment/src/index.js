var ReactDom = require('react-dom');
var React = require('react');
var NotesApp = require('./components/NotesApp.jsx');

ReactDom.render(
    <NotesApp />,
    document.getElementById('mount-point')
);
