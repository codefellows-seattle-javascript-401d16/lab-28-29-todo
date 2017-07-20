import './style/main.scss';

import React from 'react';
import uuid from 'uuid/v1';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteList from './component/note-list/';
import NoteItem from './component/note-item/';
import NoteCreateForm from './component/note-create-form/';

// constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };


    this.getApp = this.getApp.bind(this);
  }

  //hooks
  componentDidUpdate() {
    console.log(':::STATE:::', this.state);
  }


  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }


  // render
  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <h1>To Do App</h1>
            <NoteCreateForm app={this.getApp()} />
            <NoteList app={this.getApp()} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
