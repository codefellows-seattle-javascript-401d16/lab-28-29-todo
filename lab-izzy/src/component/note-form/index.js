import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    let content = props.note ? props.note.content : '';

    this.state = {content};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let content = e.target.value;
    this.setState({content});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}>

        <input
          name='note'
          type='text'
          value={this.state.content}
          placeholder='create a new to do list'
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default NoteForm;
