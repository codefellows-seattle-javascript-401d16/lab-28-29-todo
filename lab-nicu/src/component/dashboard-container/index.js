import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
    this.noteEdit = this.noteEdit.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState((state) => ({
      notes: [...state.notes, note],
    }));
  }

  noteDelete(note) {
    this.props.app.setState(state => ({
      notes: state.notes.filter(item => item.id != note.id ? true : false),
    }));
  }

  noteEdit(note){
    this.props.app.setState(state => ({
      notes: state.notes.map(item => {
        if(item.id === note.id){
          item.editing = !item.editing;
          item.content = note.content;
        }
        return item;
      }),
    }));
  }

  render() {
    return (
      <div className='app'>
        <h1> TO DO:</h1>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <NoteList notes={this.props.app.state.notes} handleEdit={this.noteEdit} handleDelete={this.noteDelete}/>
      </div>
    );
  }
}

export default DashboardContainer;