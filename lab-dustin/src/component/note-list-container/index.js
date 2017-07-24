import React from 'react';
import ActualNote from '../actual-note/note.js';

class NoteListContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.notes.map(note => {
          return <ActualNote key={note.id} note={note} noteRemove={this.props.noteRemove} />;
        })}
      </ul>
    );
  }
}

export default NoteListContainer;
