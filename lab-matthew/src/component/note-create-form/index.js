import './_note-create-form.scss';

import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      editing: false,
      completed: false,
    };
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
    this.props.handleSubmit(this.state);
    this.setState(state => ({
      title: '',
      content: '',
    }));
  }

  componentDidMount(){
    this.setState({
      title: this.props.note ? this.props.note.title : this.state.title,
      content: this.props.note ? this.props.note.content : this.state.content,
    });
  }

  render(){
    console.log('this.props.note', this.props);
    return(
      <form className="note-create-form" onSubmit={this.handleSubmit} >

        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input
          name='content'
          type='text'
          placeholder='content'
          value={
            this.props.note ? this.props.note.content : this.state.content
          }
          onChange={this.handleChange}
          />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm;
