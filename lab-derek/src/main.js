import React from 'react';
import uuid from 'uuid/v1';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteCreateForm from './component/note-create-form';
import NoteList from './component/note-list';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
    this.noteCreate = this.noteCreate.bind(this);
  }

  componentDidUpdate(){
    console.log('<<<<<<<<<<<<<<<STATE>>>>>>>>>>>>>', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  noteCreate(note){
    note.id = uuid();
    console.log('note.id', note.id);
    this.setState( state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return (
      <main>
        <h1> hello todo app </h1>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate} />
        <NoteList app={this.getApp()} />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));

// <BrowserRouter>
//   <div>
//     <Route exact path='/notelist'
//       component={() =>
//   </div>
// </BrowserRouter>
