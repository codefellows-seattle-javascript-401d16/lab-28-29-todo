import React from 'react';
import ReactDom from 'react-dom';
import uuid from 'uuid/v1';

import './style/_reset.scss';
import './style/main.scss';
import './style/_vars.scss';
import './style/_base.scss';
import './style/_layout.scss';

import NoteCreateForm from './components/note-form';
import NoteItem from './components/note-item';
import NoteList from './components/note-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
    };

    this.getApp = this.getApp.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  handleNoteSubmit(note) {
    note.completed = true;
    note.id = uuid();
    this.setState(state => ({ allNotes: [...state.allNotes, note] }))
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <NoteCreateForm app={this.getApp()} handleSubmit={this.handleNoteSubmit} buttonTitle='Add Note' />
        <NoteList app={this.getApp()} />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
