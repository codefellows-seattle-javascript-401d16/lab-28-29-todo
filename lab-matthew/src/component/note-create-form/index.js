import './_note-create-form.scss';

import React from 'react';
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
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
  }


  componentDidMount(){
    this.setState({
      title: this.props.note ? this.props.note.title : this.state.title,
      content: this.props.note ? this.props.note.content : this.state.content,
    });
  }

  render(){
    return(
      <form className={this.props.note ? this.props.note.editing : 'note-create-form'} onSubmit={this.handleSubmit} >

        <input
          name='title'
          type='text'
          required='true'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input
          name='content'
          type='text'
          required='true'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <button type='submit'>
          {this.props.buttonName}
        </button>

      </form>
    );
  }
}

export default NoteCreateForm;
