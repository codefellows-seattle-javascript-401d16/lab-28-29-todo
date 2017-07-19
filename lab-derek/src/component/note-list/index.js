import React from 'react';
import uuid from 'uuid/v1';
import NoteItem from '../note-item';

import NoteCreateForm from '../note-create-form';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return (
      <div>
        <p>hello noteList</p>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate} />
      </div>
    );
  }
}

export default NoteList;
