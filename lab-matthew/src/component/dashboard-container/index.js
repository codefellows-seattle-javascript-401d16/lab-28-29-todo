// style
import './_dashboard-container.scss';

// npm modules
import React from 'react';
import uuid from 'uuid/v1';

// app modules
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

let renderIf = (t, c) => t ? c : undefined;

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
        <div className='dashboard-form'>
          <h1 className='title'> TODO Notes </h1>
          <NoteCreateForm
          handleSubmit={this.noteCreate}
          buttonName='add note'
          />
        </div>

        <NoteList
          notes={app.state.notes}
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
        />
      </div>
    );
  }
}

export default DashboardContainer;
