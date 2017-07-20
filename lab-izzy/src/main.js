import uuid from 'uuid';
import React from 'react';

import './style/main.scss';

import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteCreateForm from './component/note-create-form';
import NoteItem from './component/note-item';
import NoteList from './component/note-list';
import About from './component/about-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
          id: 'Izzy',
          editing: true,
          content: 'I love Code Fellows!',
          completed: false,
        },
      ],
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(content){
    const notes = this.state.notes;
    const id = uuid.v1();
    const editing = false;
    const completed = false;
    const note = {content, id, editing, completed};
    notes.push(note);
    this.setState({notes});
  }

  removeNote(id){
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({notes});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => <div>
            <NoteCreateForm addNote={this.addNote} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <NoteList notes={this.state.notes} addNote={this.addNote} removeNote={this.removeNote} /></div>} />
          <Route exact path='/about' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  notes: PropTypes.array,
  addNote: PropTypes.func,
  removeNote: PropTypes.func,
};



ReactDom.render(<App />, document.getElementById('root'));
