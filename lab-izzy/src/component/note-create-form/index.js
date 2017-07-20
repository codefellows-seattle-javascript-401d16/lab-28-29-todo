import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let content = e.target.value;
    this.setState({content});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form
        className='input-change'
        onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='create a new to do list'
          onChange={this.handleChange}
        />
        <button type='submit'> Submit </button>
      </form>
    );
  }
}

export default NoteCreateForm;
