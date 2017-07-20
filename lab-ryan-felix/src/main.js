import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import uuid from 'uuid';

import CreateNote from './components/create-note';
import NoteList from './components/note-list';
import About from './components/about';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(text) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, {
        content: text,
        editing: false,
        completed: false,
        id: uuid.v1(),
      }],
    }));
  }

  removeNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  updateNote(id, updatedContent) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note => note.id === id ? { ...note, content: updatedContent } : note),
    }));
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' render={() => (
              <div>
                <CreateNote
                  addNote={this.addNote}
                />
                <NoteList
                  removeNote={this.removeNote}
                  updateNote={this.updateNote}
                  notes={this.state.notes}
                />
              </div>
            )}/>
            <Route exact path='/about' component={About}>
            </Route>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
