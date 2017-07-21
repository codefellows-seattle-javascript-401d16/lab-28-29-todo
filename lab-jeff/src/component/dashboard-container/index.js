import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState((state) => ({
      notes: [...state.notes, note],
    }));
  }

  noteUpdate(updatedNote) {
    this.props.app.setState((state) => ({
      notes: state.notes.map((item) => {
        return item.id == updatedNote.id ? updatedNote : item;
      }),
    }));
  }

  noteDelete(note) {
    this.props.app.setState(state => ({
      notes: state.notes.filter(item => item.id != note.id ? true: false),
    }));
  }

  render() {
    return (
      <div className='app'>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <NoteList notes={this.props.app.state.notes} handleDelete={this.noteDelete}/>
      </div>
    );
  }
}

export default DashboardContainer;
