import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      id: props.note.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //Method to update

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.props.noteUpdate(this.state);
  }

  render(){
    return(
      <form className='update-form' onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          name='content'
          placeholder='Update your note...'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Update Note</button>
      </form>
    );
  }
}

export default NoteUpdateForm;
