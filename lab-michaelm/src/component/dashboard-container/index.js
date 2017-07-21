import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import Navbar from '../navbar';
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showErrors: true,
    };

    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(note){
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
        return item.id !== note.id ;
      })
    }));
  }

  noteUpdate(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      })
    }));
  }

  render(){
    return (
      <div className='dashboard-container'>
      <Navbar />
        <NoteCreateForm
          handleNoteCreate={this.noteCreate}
          submitTitle='Create Note'
           />
        <NoteList
        app={this.props.app}
        noteRemove={this.noteRemove}
        noteUpdate={this.noteUpdate}
           />
      </div>
    );
  }
}

export default DashboardContainer;
