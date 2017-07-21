import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    console.log('props', props);
    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClearInput = this.handleClearInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.noteAdd(Object.assign({}, this.state));
  }

  handleChange(e) {
    let content = e.target.value;
    this.setState({content});
  }

  // handleClearInput(e){
  //   this.textInput.value = '';
  // }

  render() {
    return (
      <form
        className='note-form'
        onSubmit={this.handleSubmit}>

        <input
          name='note'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          placeholder='create a new to do list' />

        <button type='submit'>
          Submit
        </button>

      </form>
    );
  }
}

export default NoteForm;
