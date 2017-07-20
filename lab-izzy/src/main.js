import uuid from 'uuid';
import React from 'react';

import './style/main.scss';

import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteItem from './component/note-item';
import NoteList from './component/note-list';
import AboutContainer from './component/about-container';
import NoteCreateForm from './component/note-create-form';

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
    let notes = this.state.notes;
    let id = uuid.v1();
    let editing = false;
    let completed = false;
    let note = {content, id, editing, completed};
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
          <Route exact path='/about' component={AboutContainer} />
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

// identical statements
// <DashboardContainer app = {this.getApp()} />   <--- JSX
// new DashboardContainer({app: this.getApp()})  <--- Vanilla JS

ReactDom.render(<App />, document.getElementById('root'));
