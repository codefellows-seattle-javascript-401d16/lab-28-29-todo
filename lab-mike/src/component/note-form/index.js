import './_note-form.scss';
import React from 'react';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);
    let inputText = this.props.note ? this.props.note.inputText : '';
    this.state = {
      inputText: inputText,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render () {
    return (
      <form className='note-form' onSubmit={this.handleSubmit} >
        <input
          name='inputText'
          type='text'
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.submitTitle}</button>
      </form>
    );
  }
}

export default NoteForm;
