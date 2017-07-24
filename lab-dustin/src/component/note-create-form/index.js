import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: uuid(),
      editing: false,
      completed: false,
      content: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      editing: true,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }
  render() {
    // console.log('********************', this.props.app);
    return (
      <form onSubmit={this.handleSubmit} >
        Title: <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />
        Content: <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button className='note-create' type='submit'> Submit </button>
      </form>
    );
  }
}

export default NoteCreateForm;
