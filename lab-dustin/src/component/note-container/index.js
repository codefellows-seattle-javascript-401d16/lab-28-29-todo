import React from 'react';
import NoteCreateForm from '../note-create-form-container';
import NoteListContainer from '../note-list-container';
import uuid from 'uuid/v1';

class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props.app);
  }


  render() {
    return (
      <div>
        <p>sdfafasfsdfasd</p>
        <NoteCreateForm noteCreate={this.props.noteCreate}/>
        <NoteListContainer notes={this.props.notes}/>
      </div>
    );
  }
}

export default NoteContainer;
