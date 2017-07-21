import React from 'react';
import uuid from 'uuid';

import Modal from '../modal';
import NoteList from '../note-list';
import NoteForm from '../note-form';


class DashboardContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showErrors: true,
    };

    this.noteAdd = this.noteAdd.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteAdd(note){
    note.id = uuid();

    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note]),
    }));
  }

  noteRemove(id){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== id;
      }),
    }));
  }

  noteUpdate(newNote){
    let {app} = this.props;

    app.setState(prevState => ({

      notes: prevState.notes.map((note) => {
        return note.id == newNote.id ? newNote : note;
      }),
    }));
  }

  render(){
    let {app} = this.props;

    return (
      <div className='dashboard-container'>
        <NoteForm
          onSubmit={this.noteAdd} />

        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          notes={app.state.notes} />

      </div>
    );
  }
}









export default DashboardContainer;
