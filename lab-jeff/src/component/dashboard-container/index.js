import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: true,
    };

    this.noteCreate = this.noteCreate.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState((state) => ({
      notes: [...state.notes, note],
    }));
  }

  noteUpdate(note) {
    let {app} = this.props;
    app.setState(state => ({
      notes: state.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  noteDelete(note) {
    this.props.app.setState(state => ({
      notes: state.notes.filter(item => item.id != note.id ? true: false),
    }));
  }

  render(){
    return (
      <div className='dashboard-container'>
        <NoteCreateForm
          app={this.props.app}
          handleNoteCreate={this.noteCreate}
          submitTitle='Create Note'
          renderif={this.renderif}
        />
        <NoteList
          app={this.props.app}
          noteDelete={this.noteDelete}
          handleNoteUpdate={this.noteUpdate}
          renderIf={this.renderIf}
        />
      </div>
    );
  }
}

export default DashboardContainer;
