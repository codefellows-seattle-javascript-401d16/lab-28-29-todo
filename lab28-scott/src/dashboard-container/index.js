import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form-container';
import NoteList from '../note-list-container';

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('CONTAINER', this.props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
  }

  //METHODS - for all CRUD operations
  noteCreate(note){
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
    }));
  }

  noteRemove(note){
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }

  render(){
    return(
      <div>
        <p>this is Dashboard!</p>
        <NoteCreateForm noteCreate={this.noteCreate}/>
        <div className='note-list'>
          <NoteList
            notes={this.props.app.state.notes}
            noteRemove={this.noteRemove}
          />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
