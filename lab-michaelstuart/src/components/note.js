import React from 'react';
import NoteCreateForm from './note-create-form';
import NoteList from './note-list';
import uuid from 'uuid';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(content) {
    const notes = [...this.state.notes]
    const id = uuid.v1();
    notes.push({ content, id });
    this.setState({ notes })
  }

  removeNote(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  updateNote(newNote) {
    const notes = this.state.notes.map(note => {
      return note.id === newNote.id ? newNote : note;
    })
    this.setState({ notes })
  }

  render() {
    return (
      <div>
        <NoteCreateForm addNote={this.addNote} />
        <NoteList
          notes={this.state.notes}
          removeNote={this.removeNote}
          updateNote={this.updateNote}/>
      </div>
    )
  }
}
