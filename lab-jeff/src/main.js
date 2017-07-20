import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteList from './component/note-list/';
import NoteItem from './component/note-item/';
import NoteCreateForm from './component/note-create-form/';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate() {
    console.log(':::STATE:::', this.state);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
  };
}

render() {
  return (
    <main>
      <BrowserRouter>
        <div>
          <h1>To Do App</h1>
          <NoteCreateForm app={this.getApp()} />
          <NoteList app={this.getApp()} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
