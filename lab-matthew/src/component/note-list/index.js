import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return (
      <div className='note-list'>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <p> Hello note-list </p>
        <NoteItem notes={this.props.app.state.notes} />
      </div>
    );
  }
}

export default NoteList;
