import React from 'react';

export default class NoteUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      id: this.props.note.id,
      content: this.state.content,
      completed: false,
    }
    this.props.updateNote(note);
  }

  handleCancel(e) {
    e.preventDefault();
    const note = {
      id: this.props.note.id,
      content: this.props.note.content,
      completed: false,
    }
    this.props.updateNote(note);
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.content} onChange={this.handleChange} />
        <button className='update' onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }
}
