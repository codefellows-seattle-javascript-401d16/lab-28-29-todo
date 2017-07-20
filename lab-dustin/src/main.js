import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NoteContainer from './component/note-container';
import uuid from 'uuid/v1';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
    this.noteCreate = this.noteCreate.bind(this);
  }
  componentDidUpdate(){
    console.log('****STATE****', this.state);
  }
  noteCreate(note) {
    note.id = uuid();
    this.setState( state => ({
      notes: [...state.notes, note],
    }));
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
            <Route exact path='/' component={() => <NoteContainer app={this.getApp()}
              noteCreate={this.noteCreate} notes={this.state.notes}/>} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
