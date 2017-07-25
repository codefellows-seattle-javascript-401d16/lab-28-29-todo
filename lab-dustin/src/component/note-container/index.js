import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteListContainer from '../note-list-container';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
  }
  noteRemove(note){
    console.log('this at noteRemove', this);
    this.props.app.setState(state => ({
      notes: state.notes.filter((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }
  noteCreate(note) {
    console.log('++++++++++', this );
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }));
  }

  render() {
    return (
      <div className='note-container'>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate}
        />
        <NoteListContainer
          notes={this.props.app.state.notes}
          noteRemove={this.noteRemove}

        />
      </div>
    );
  }
}

export default NoteContainer;
