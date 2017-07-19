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
      allNotes: state.allNotes.filter(note => note.id !== this.props.curNote.id)
    }));
  }

  render() {
    return (
      <p>
        {this.props.curNote.content}
        <input
          type='button'
          name='delete'
          id={this.props.curNote.id}
          value='x'
          onClick={this.deleteNote}
        />
      </p>
    );
  }
}

export default NoteItem;
