import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';

class DashBoardContainer extends React.Component {
  constructor(props){
    super(props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  noteCreate(notes){
    notes.id = uuid();
    this.props.app.setState( prevState => ({
      note: [...prevState.note, notes],
    }));

  }
  noteRemove(notes){
    let {app} = this.props;
    app.setState(prevState => ({
      note: prevState.note.filter((item) => {
        return item.id !== notes.id;
      }),
    }));
  }

  noteUpdate(notes){
    let {app} = this.props;
    app.setState(prevState => ({
      note: prevState.note.map((item) => {
        return item.id == notes.id ? notes : item;
      }),
    }));
  }


  render(){
    let {app} = this.props;
    return(
      <div className='dashboard-container'>
        <NoteCreateForm
          handleSubmit={this.noteCreate}
          submitTitle='Create Note'
        />
        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          note={app.state.note}
        />
      </div>
    );
  }
}

export default DashBoardContainer;
