import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.createNote = this.createNote.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createNote(event) {
    event.preventDefault();
    let note = {
        id: uuid(),
        editing: false,
        completed: true,
        content: event.target.content.value,
    };
    this.props.getApp().setState(state => {
      state.allNotes = [...state.allNotes, note];
    });
    this.state.content = '';
  }

  render() {
    return (
      <form className='note-create-form' onSubmit={this.createNote}>
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button
          type='submit'
          name='addNote'
        >Add Note</button>
      </form>
    );
  }
}

export default NoteCreateForm;
