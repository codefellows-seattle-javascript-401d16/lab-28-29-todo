import React from 'react';
import ReactDom from 'react-dom';

import './style/reset.scss';
import './style/main.scss';
import './style/vars.scss';
import './style/base.scss';
import './style/layout.scss';

import NoteCreateForm from './component/note-create-form';
import NoteItem from './component/note-item';
import NoteList from './component/note-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
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
    console.log(':::STATE:::', this.state);
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
