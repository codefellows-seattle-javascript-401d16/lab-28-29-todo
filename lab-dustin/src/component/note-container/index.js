import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteListContainer from '../note-list-container';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    console.log('props', props.app);
  }
  noteCreate(note) {
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }));
  }
  render() {
    return (
      <div>
        <NoteCreateForm handleNoteCreate={this.noteCreate}/>
      </div>
    );
  }
}

export default NoteContainer;
