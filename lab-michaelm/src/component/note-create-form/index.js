import React from 'react';
import './_note-create-form.scss';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.handleNoteCreate(this.state);
  }

  render(){
    return (
      <form className="note-create-form" onSubmit={this.handleSubmit} >

        <input
          autoFocus
          placeholder="type a note here"
          name='content'
          type='textfield'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.submitTitle} </button>

      </form>
    );
  }
}

export default NoteCreateForm;
