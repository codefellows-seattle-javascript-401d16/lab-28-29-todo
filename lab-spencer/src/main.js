import React from 'react';
import ReactDom from 'react-dom';

import './style/_reset.scss';
import './style/main.scss';
import './style/_vars.scss';
import './style/_base.scss';
import './style/_layout.scss';

import NoteCreateForm from './components/note-create-form';
import NoteItem from './components/note-item';
import NoteList from './components/note-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <NoteCreateForm getApp={this.getApp} />
        <NoteList getApp={this.getApp} />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
