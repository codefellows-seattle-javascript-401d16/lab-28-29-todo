import React from 'react';

import NoteForm from '../note-form';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      content: props.curNote.content || '',
    };
    this.deleteNote = this.deleteNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  cancelEdit() {
    this.setState({ view: 'default'});
  }

  deleteNote(event) {
    event.preventDefault();
    this.props.app.setState(state => ({
      allNotes: state.allNotes.filter(note => note.id !== this.props.curNote.id),
    }));
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleEdit(event) {
    this.props.curNote.editing = true;
    this.props.curNote.completed = false;
    this.setState({ view: 'edit' });
  }

  handleEditSubmit(editedNote) {
    this.props.curNote.editing = false;
    this.props.curNote.completed = true;
    this.props.curNote.content = editedNote.content;
    this.props.app.setState(state => ({
      allNotes: this.props.app.state.allNotes.map(note => note.id === editedNote.id ? this.props.curNote : note),
    }));
    this.setState({ view: 'default' });
  }

  render() {
    return (
      this.state.view === 'default' ?
        <content>
          <span
            onDoubleClick={this.handleEdit}>
            {this.props.curNote.content}
          </span>
          <button
            name='delete'
            className='delete'
            onClick={this.deleteNote}
          >X</button>
        </content>
        :
        <content>
          <NoteForm
            handleSubmit={this.handleEditSubmit}
            content={this.props.curNote.content}
            buttonTitle='Change'
          />
          <button
            name='cancel'
            value='Cancel'
            onClick={this.cancelEdit}
          >Cancel</button>
        </content>
    );
  }
}

export default NoteItem;
