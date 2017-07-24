import React from 'react';
import PropTypes from 'prop-types';

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      invalidInput: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    evt.preventDefault();
    this.setState({
      inputText: evt.target.value,
      invalidInput: false,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.inputText.length > 0) {
      this.props.addNote(this.state.inputText);
      this.setState({
        inputText: '',
      });
    } else {
      this.setState({
        invalidInput: true,
      });
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='create-note-form'
      >
        <h4>Add a to-do item</h4>
        <input
          type="text"
          placeholder="new todo"
          value={this.state.inputText}
          onChange={this.handleInputChange}
          className={this.state.invalidInput && 'invalid'}
        />
        <div>
          <button
            type="submit"
          >
            Add To-Do
          </button>
        </div>
      </form>
    );
  }
}

CreateNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};
