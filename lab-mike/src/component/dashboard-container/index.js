import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteListContainer from '../note-list-container';

class DashboardContainer extends React.Component {
  constructor (props) {
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
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

  noteDelete (note) {
    this.props.app.setState((prevState) => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id
      })
    }))
  }

  noteUpdate (note) {
    this.props.app.setState((prevState) => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item
      })
    }))
  }

  render () {
    return (
      <div>
        <h1>Notes Machine</h1>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <NoteListContainer
          noteUpdate={this.noteUpdate}
          noteDelete={this.noteDelete}
          notes={this.props.app.state.notes}/>
      </div>
    )
  }
}

export default DashboardContainer;
