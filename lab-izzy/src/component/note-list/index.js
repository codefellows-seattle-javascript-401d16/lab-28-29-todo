import React from 'react';
import NoteItem from './component/note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let notes = this.props.notes || [];
    return (

      <ul>
        {notes.map(note => {
          return <NoteItem key={note.id} note={note} removeNote={this.props.removeNote} />;
        })}
      </ul>
    );
  }
}

export default NoteList;
