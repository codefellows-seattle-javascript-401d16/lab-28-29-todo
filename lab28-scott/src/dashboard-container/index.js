import './_dashboard.scss';
import React from 'react';
import uuid from 'uuid/v1';
import NoteCreateForm from '../note-create-form-container';
import NoteUpdateForm from '../note-update-form-container';
import NoteList from '../note-list-container';
import Modal from '../modal-container';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: true,
    };
    console.log('DASH this.props: ', this.props);
    this.noteCreate = this.noteCreate.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
  }

  //METHODS - for all CRUD operations
  noteCreate(note){
    console.log('hit noteCreate');
    note.id = uuid();
    this.props.app.setState(prevState => ({
      notes: [...prevState.notes, note],
      totalNotes: prevState.totalNotes + 1,
    }));
  }

  noteUpdate(updatedNote){
    console.log('hit updateNote');
    this.props.app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == updatedNote.id ? updatedNote : item;
      }),
    }));
  }

  noteRemove(note){
    console.log('hit noteRemove');
    this.props.app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }


  render(){

    let {app} = this.props;
    let totalNotes = app.state.totalNotes;
    let remainingNotes = app.state.maxNotes - totalNotes;

    return(
      <div className='search-form'>
        <p className='intro'>Something on your mind, no pen in sight...no problem! <br></br><strong>Jot</strong> it down!</p>
        <NoteCreateForm noteCreate={this.noteCreate}/>

        {renderIf(remainingNotes === 0 && this.state.showModal,
          <Modal close={() => this.setState({showModal: false})}>
            <h2>Buy more Note credits!</h2>
          </Modal>
        )}
        <div className='note-count'>
          <p className='count-title'>Total Notes</p>
          <p className='count-title'>Remaining Notes</p>
          <p className='count-results'>{totalNotes}</p>
          <p className='count-results'>{remainingNotes}</p>
        </div>
        <div className='note-list'>
          <NoteList
            notes={this.props.app.state.notes}
            noteRemove={this.noteRemove}
            noteUpdate={this.noteUpdate}
          />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
