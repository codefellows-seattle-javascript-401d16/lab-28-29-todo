import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      editing: false,
      completed: false,
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ content: '' })
  }

  render() {
    return (
      <form className='note-form' onSubmit={this.handleSubmit}>
        <input
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button
          type='submit'
          name='addNote'
        >{this.props.buttonTitle}</button>
      </form>
    );
  }
}

export default NoteCreateForm;
