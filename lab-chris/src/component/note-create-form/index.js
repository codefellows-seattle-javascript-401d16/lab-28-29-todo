import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
      editing: false,
      complete: false,
    };

    this.handleChange = this.handleChange.bind(this.state);
    this.handleSubmit = this.handleSubmit.bind(this.state);
    this.handleNoteCreate = this.handleNoteCreate.bind(this.state);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.handleNoteCreate(this.state);
  }

  handleNoteCreate(note){
    note.id = uuid();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          >
          </input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NoteCreateForm;
