import React from 'react';

export default class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state.content);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className='input' placeholder='new todo' type='text' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
    )
  }
}
