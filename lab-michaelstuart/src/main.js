import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import uuid from 'uuid';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1> about view </h1>
      </div>
    )
  }
}

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      editing: this.props.note.editing,
      content: this.props.note.content,
      completed: this.props.note.completed,
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeNote(this.state.id);
  }

  render() {
    return (
      <li>
        <p>{this.state.content}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.notes.map(note =>
          <NoteItem key={note.id} note={note} removeNote={this.props.removeNote}/>)}
      </ul>
    )
  }
}

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state.content);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className='input' placeholder='new todo' type='text' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
    )
  }
}

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NoteCreateForm addNote={this.props.addNote} />
        <NoteList notes={this.props.notes} removeNote={this.props.removeNote} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(content) {
    const notes = this.state.notes;
    const id = uuid.v1();
    const editing = false;
    const compelted = false;
    const note = { content, id, editing, compelted };
    notes.push(note);
    this.setState({ notes })
  }

  removeNote(id) {
    let notes = this.state.notes;
    notes = notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/about'} component={About} />
          <Route
            exact
            path={'/note'}
            component={() => <Note notes={this.state.notes} addNote={this.addNote} removeNote={this.removeNote} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}


const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)

export { NoteCreateForm, NoteItem }
