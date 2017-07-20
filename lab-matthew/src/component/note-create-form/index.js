import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
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
    this.noteCreate(this.state);
  }

  noteCreate(note){
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
          value={this.state.content}
          onChange={this.handleChange}
          />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm;
