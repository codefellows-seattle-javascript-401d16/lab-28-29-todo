import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';
import NoteList from '../note-list';
import NoteCreateForm from '../note-create-form';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.app;
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note){
    note.id = uuid();
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return (
      <div className='dashboard-container'>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate} />
        <NoteList app={this.props.app}/>
      </div>
    );
  }
}

export default DashboardContainer;
