import uuid from 'uuid';
import React from 'react';

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

  noteRemove(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  render(){
    let {app} = this.props;

    return (
      <div className='dashboard-container'>
        <NoteForm
          handleSubmit={this.noteAdd}
          buttonName='add note'/>

        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          notes={app.state.notes} />

      </div>
    );
  }
}

export default DashboardContainer;
