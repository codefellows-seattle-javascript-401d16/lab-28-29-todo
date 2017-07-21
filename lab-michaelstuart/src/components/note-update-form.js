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
    this.props.updateNote({
      id: this.props.note.id,
      content: this.state.content,
      editing: false,
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.updateNote({
      id: this.props.note.id,
      content: this.props.note.content,
      editing: false,
    });
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
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
