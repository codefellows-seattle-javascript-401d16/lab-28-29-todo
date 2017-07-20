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

class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      id: this.props.note.id,
      content: this.state.content,
      editing: false,
      completed: true,
    }
    this.props.updateNote(note);
  }

  handleCancel(e) {
    e.preventDefault();
    const note = {
      id: this.props.note.id,
      content: this.props.note.content,
      editing: false,
      completed: false,
    }
    this.props.updateNote(note);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.content} onChange={this.handleChange} />
        <button className='update' onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
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
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDelete() {
    this.props.removeNote(this.state.id);
  }

  handleDoubleClick() {
    const editing = !this.state.editing;
    this.setState({ editing });
  }

  render() {
    return (
      <li>
        {this.state.editing ? (
          <NoteUpdateForm
            note={this.state}
            updateNote={this.props.updateNote}/>
        ) : (
          <span>
            <p onDoubleClick={this.handleDoubleClick}>{this.state.content}</p>
            <button className='delete' onClick={this.handleDelete}>Delete</button>
          </span>
        )}
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
          <NoteItem
            key={note.id}
            note={note}
            removeNote={this.props.removeNote}
            updateNote={this.props.updateNote}/>)}
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
        <NoteList
          notes={this.props.notes}
          removeNote={this.props.removeNote}
          updateNote={this.props.updateNote}/>
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
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(content) {
    const notes = [...this.state.notes]
    const id = uuid.v1();
    const editing = false;
    const completed = false;
    const note = { content, id, editing, completed };
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

export { NoteCreateForm, NoteItem, NoteUpdateForm }
