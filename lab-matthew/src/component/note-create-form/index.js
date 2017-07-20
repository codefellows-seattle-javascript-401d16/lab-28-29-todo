import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
      editing: false,
      completed: false,
    };
    this.noteCreate = this.noteCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('TEST', this.state);
    this.noteCreate(this.state);
    this.setState(state => ({
      content: '',
    }));
  }

  noteCreate(note){
    console.log('NOTE', note);
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >

        <input
          name='content'
          type='text'
          placeholder='make a note'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm;
