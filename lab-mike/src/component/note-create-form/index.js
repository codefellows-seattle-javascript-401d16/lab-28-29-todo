import React from 'react';

class NoteCreateForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputText: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          name='inputText'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <button type='submit'>Submit Text</button>

      </form>
    )
  }
}

export default NoteCreateForm;
