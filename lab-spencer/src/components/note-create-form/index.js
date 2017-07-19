import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.createNote = this.createNote.bind(this);
  }

  createNote(event) {

  }

  render() {
    return (
      <form className='note-create-form' onSubmit={this.createNote}>

      </form>
    );
  }
}

export default NoteCreateForm;
