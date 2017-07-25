import uuid from 'uuid';
import React from 'react';

import Modal from '../modal';
import Navbar from '../navbar';
import NoteList from '../note-list';
import NoteForm from '../note-form';
import './_dashboard-container.scss';

let renderIf = (t, c) => t ? c : undefined;

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
        return item.id !== note.id;
      }),
    }));
  }

  noteUpdate(updatedNote){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == updatedNote.id ? updatedNote : item;
      }),
    }));
  }

  render(){
    let {app} = this.props;

    return (
      <div className='dashboard-container'>
        <Navbar />

        <main className='dashboard-main'>

          <div className='ledger'>

          </div>

          <NoteForm
            handleSubmit={this.noteCreate}
            buttonName='add note' />

          <NoteList
            notes={app.state.notes}
            noteUpdate={this.noteUpdate}
            noteRemove={this.noteRemove} />

        </main>
      </div>
    );
  }
}

export default DashboardContainer;
