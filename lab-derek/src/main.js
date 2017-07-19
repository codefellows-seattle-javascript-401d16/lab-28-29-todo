import React from 'react';
import uuid from 'uuid/v1';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import NoteList from './note-list/index.js';
import NoteCreateForm from './note-create-form/index.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],

    };
  }

  render(){
    return (
      <div>
        <h1> hello todo app </h1>
        <NoteCreateForm />
        <NoteList />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
