// npm modules
import React from 'react';
import uuid from 'uuid/v1';

// app modules
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);

  }

  //hooks
  //methods
  noteCreate(note) {
    note.id = uuid();
    // immutably add new note to the note array on app state
    let {app} = this.props;
    app.setState(state => ({
      notes: state.notes.concat([note]),
    }));
  }

  noteRemove(note){
    let {app} = this.props;
    app.setState(state => ({
      notes: state.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(note){
    let {app} = this.props;
    app.setState(state => ({
      notes: state.notes.map((item) => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  // render
  render(){
    let {app} = this.props;

    return(

      <div className='dashboard-container'>

        <p> Dashboard Container </p>
        <NoteCreateForm
          handleSubmit={this.noteCreate}
        />

        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          handleSubmit={this.noteCreate}
          notes={app.state.notes}
        />
      </div>
    );
  }
}

export default DashboardContainer;
