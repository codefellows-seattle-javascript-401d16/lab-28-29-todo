import './_note-form.scss';
import React from 'react';
import uuid from 'uuid/v1';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    let id = props.note ? props.note.id : uuid();
    let content = props.note ? props.note.content : '';
    let edit = props.note ? props.note.edit : false;
    let completed = props.note ? props.note.completed : false;
    this.state = {id, content, edit, completed};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {this.setState({ [e.target.name]: e.target.value });}

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <div className='note-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type='submit' className='note-form-button'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
