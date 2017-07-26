import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteListContainer from '../note-list-container';

class DashboardContainer extends React.Component {
  constructor (props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate (text) {
    this.props.app.setState((prevState) => ({
      notes: [...prevState.notes,
        {
          id: uuid(),
          editing: false,
          completed: false,
          content: text,
        },
      ],
    }));
  }

  render () {
    return (
      <div>
        <h1>Notes Machine</h1>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <NoteListContainer />
      </div>
    )
  }
}

export default DashboardContainer;
