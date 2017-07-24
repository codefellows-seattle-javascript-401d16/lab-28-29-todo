import './note-create-form.scss';
import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };

    this.NoteCreate = this.NoteCreate.bind(this);
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
    this.NoteCreate(this.state);
  }

  NoteCreate(note){
    console.log('props', this.props);
    note.id = uuid();
    this.props.app.setState(state => ({
      notes: [...state.notes, note],
    }));
  }

  render(){
    return(
      <div>
        <form className='note-create-form' onSubmit={this.handleSubmit}>
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
