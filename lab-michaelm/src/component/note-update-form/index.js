import React from 'react';
import './_note-update-form.scss';

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    };
    console.log('note update form props:\n',this.props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
      id: this.props.noteID
    });
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.handleNoteUpdate(this.state);
  }

  render(){
    return (
      <form className="note-update-form" onSubmit={this.handleSubmit} >
        <input
          placeholder="new text here"
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <p>Editing</p>
        <input
          name='editing'
          type='checkbox'
          value={this.state.editing}
          onChange={this.handleChange}
          />

        <p>Completed</p>
        <input
          name='completed'
          type='checkbox'
          value={this.state.completed}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.submitTitle} </button>

      </form>
    );
  }
}

export default NoteUpdateForm;
