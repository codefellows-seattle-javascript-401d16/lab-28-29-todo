import uuid from 'uuid/v1';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//import child containers
import NoteCreateFormContainer from './note-create-form-container/index.js';
import NoteItemContainer from './note-item-container/index.js';
import NoteListContainer from './note-list-container/index.js';

//holding my main application

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.handleNoteCreate = this.handleNoteCreate.bind(this);
  }

  //show the state in the console
  componentDidUpdate(){
    console.log('--STATE-CHANGE--', this.state);
  }
  //create app function for sending children data to parent
  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  //create the note from the form data
  handleNoteCreate(note){
    console.log('note', note);
    note.id = uuid();
    this.setState(state => ({
      notes: [...state.notes, note],
    }));
    console.log('MAIN this.state.notes:', this.state.notes);
  }

  render(){
    return(
      <main>
        <h1>ToDo App!</h1>
        <div>
          <NoteCreateFormContainer
            app={this.getApp()}
            noteCreate={this.handleNoteCreate}
          />
          <NoteListContainer
            app={this.getApp()}
            noteList={this.state.notes}
          />
          <NoteItemContainer
            app={this.getApp()}
          />
        </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
