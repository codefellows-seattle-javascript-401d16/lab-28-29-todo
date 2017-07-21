import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    let title = props.note ? props.note.title : '';
    let task = props.note ? props.note.task : '';
    this.state = {title, task};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    console.log(this);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
    return(
      <form
        className='note-create-form'
        onSubmit={this.handleSubmit} >
        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='task'
          type='text'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    );
  }
}

export default NoteCreateForm;
