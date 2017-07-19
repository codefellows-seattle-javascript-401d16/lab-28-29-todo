import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(event) {

  }

  render() {
    return (
      <li>

        <input type='button' name='delete' value='x' onClick={this.deleteNote} />
      </li>
    );
  }
}
