import './_note-list-container.scss';
import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form-container';
import NoteItem from '../note-container';

class NoteListContainer extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props);
  }
  render() {
    let notes = this.props.notes || [];
    console.log('NOTESSSSSSSSSSSSSSS', this.props);
    return (
      <ul>
        {notes.map(note => {
          return <NoteItem key={note.id} note = {note} />;
        })}
      </ul>
    );
  }
}

export default NoteListContainer;
