import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    console.log('props', props);
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e){
    e.preventDefault();
    console.log('this.state', this.state);
    console.log('this.props', this.props);
    console.log('form was submitted');
    this.props.noteCreate(this.state);
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='Content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }

}

export default NoteCreateForm;
