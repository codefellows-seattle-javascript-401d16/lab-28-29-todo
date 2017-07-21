import React from 'react';
import uuid from 'uuid';
import NoteForm from '../note-form';
import NoteList from '../note-list';


class NoteItem extends React.Component {
  constructor(props){
    super(props);
    console.log('testing', this.props);
    this.noteCreate=this.noteCreate.bind(this);
    this.noteRemove=this.noteRemove.bind(this);
    this.noteUpdate=this.noteUpdate.bind(this);
  }
  noteCreate(note){
    console.log('this value', note);
    // let {app} = this.props;
    note.id = uuid();
    this.props.app.setState(state =>
      ({
        notes: [...state.notes, note],
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
    
    console.log('this.state', this.props.app);
    return(
      <li>
        <div className='note-item'>

          <NoteForm
            handleSubmit={this.noteCreate}
          />

          <NoteList
            notes={app.state.notes} />
        </div>
      </li>
    );
  }
}

export default NoteItem;
