import uuid from 'uuid';
import React from 'react';

import './style/main.scss';

import PropTypes from 'prop-types';

import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2> About </h2>
      </div>
    );
  }
}

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    console.log(props, 'props');
    this.state = {
      id: props.note.id,
      editing: props.note.editing,
      content: props.note.content,
      completed: props.note.completed,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    console.log('state', this.state);
    this.props.removeNote(this.state.id);
  }

  render() {
    return (
      <ul>
        <li>
          <p>{this.state.content}</p>
          <button onClick={this.handleDelete}> Delete Note </button>
        </li>
      </ul>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    editing: PropTypes.bool,
    content: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleDelete: PropTypes.func,
  removeNote: PropTypes.func,
};

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let notes = this.props.notes || [];
    return (

      <ul>
        {notes.map(note => {
          return <NoteItem key={note.id} note={note} removeNote={this.props.removeNote} />;
        })}
      </ul>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  removeNote: PropTypes.func,
};

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addNote(this.state.content);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({content});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='create a new to do list'
          onChange={this.handleChange}
        />
        <button type='submit'> Submit </button>
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  addNote: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

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
