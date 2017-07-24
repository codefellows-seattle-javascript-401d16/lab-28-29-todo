import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteContainer from './component/note-container';
import NoteCreateForm from './component/note-create-form';
import ActualNote from './component/actual-note/note.js';
import NoteListContainer from './component/note-list-container';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
  }
  componentDidUpdate(){
    console.log('****STATE****', this.state);
  }
  noteRemove(id) {
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({notes});
  }
  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  render() {
    return (
      <main>
        <h1>h1 isnt broken</h1>
        <BrowserRouter>
          <div>
            <Route exact path=''
              component={() => <NoteContainer app={this.getApp()} />} />
          </div>
        </BrowserRouter>
        <NoteListContainer notes={this.state.notes} noteRemove={this.noteRemove}/>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
