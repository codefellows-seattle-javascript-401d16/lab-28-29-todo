import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);

    let content = props.note ? props.note.content : '';

    this.state = {content};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  handleChange(e){
    let content = e.target.value;
    this.setState({content});
  }

  render() {
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
          placeholder='create a new to do list' />

        <button type='submit'>
          {this.props.buttonName}
        </button>

      </form>
    );
  }
}

export default NoteForm;
