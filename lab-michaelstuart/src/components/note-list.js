import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.notes.map(note =>
          <NoteItem
            key={note.id}
            note={note}
            editing={this.props.editing}
            removeNote={this.props.removeNote}
            updateNote={this.props.updateNote}
            toggleMode={this.props.toggleMode}/>)}
      </ul>
    )
  }
}
