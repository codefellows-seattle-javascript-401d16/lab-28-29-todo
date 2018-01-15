import './_note-item.scss';

import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.noteCreate = this.noteCreate.bind(this);
  }


  noteCreate(note){
    note.id = uuid();
    note.editing = false;
    note.completed = false;
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }));
  }

  render() {
    console.log('this new item', this.props.noteItem);
    return (
      <div className='note-form'>
        <h1>Create a Note</h1>
        <NoteCreateForm handleSubmit={this.noteCreate} submitName="Add Note" />
      </div>
    );
  }
}

export default NoteItem;
