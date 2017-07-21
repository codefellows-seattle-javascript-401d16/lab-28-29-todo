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
    console.log('UPDATE:', this.props);
  }

  //Method to update

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e){
    e.preventDefault();
    console.log('updateSTATE:', this.state);
    this.props.noteUpdate(this.state);
  }

  render(){
    return(
      <form className='update-form' onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          name='content'
          placeholder='New Content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Update Note</button>
      </form>
    );
  }
}

export default NoteUpdateForm;
