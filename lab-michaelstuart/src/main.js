import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uuid from 'uuid';
import About from './components/about';
import Note from './components/note';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(content) {
    const notes = [...this.state.notes]
    const id = uuid.v1();
    const completed = false;
    const note = { content, id, completed };
    notes.push(note);
    this.setState({ notes })
  }

  removeNote(id) {
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  updateNote(newNote) {
    const notes = this.state.notes.map(note => {
      return note.id === newNote.id ? newNote : note;
    })
    this.setState({ notes })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/about'} component={About} />
          <Route
            exact
            path={'/'}
            component={() =>
              <Note
                notes={this.state.notes}
                addNote={this.addNote}
                removeNote={this.removeNote}
                updateNote={this.updateNote}/>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)
