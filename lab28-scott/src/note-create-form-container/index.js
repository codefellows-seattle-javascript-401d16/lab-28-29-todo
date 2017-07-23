import './_note-create-form.scss';
import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e){
    e.preventDefault();
    console.log('form was submitted');
    this.props.noteCreate(this.state);
  }

  render(){
    return(
      <form className='note-create-form' onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          name='content'
          placeholder='Jot your thoughts...'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Create Note</button>
      </form>
    );
  }

}

export default NoteCreateForm;
