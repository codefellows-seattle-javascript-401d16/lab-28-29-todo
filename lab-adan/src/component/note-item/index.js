import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(event) {
    event.preventDefault();
    this.props.getApp().setState(state => ({
      notes: state.notes.filter(note => note.id !== this.props.currentNote.id)
    }));
  }

  render() {
    return (
      <p>
        {this.props.currentNote.content}
        <input
          type='button'
          name='delete'
          id={this.props.currentNote.id}
          value='X'
          onClick={this.deleteNote}
        />
      </p>
    );
  }
}

export default NoteItem;
