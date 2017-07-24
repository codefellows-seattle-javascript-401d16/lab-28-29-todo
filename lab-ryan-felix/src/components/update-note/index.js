import React from 'react';
import PropTypes from 'prop-types';

export default class UpdateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: props.content,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputText: evt.target.value,
    });
  }

  handleSubmitButtonClick() {
    console.log(this.state.inputText);
    this.props.updateThisNote(this.state.inputText);
    this.props.closeEditor();
  }

  render() {
    return (
      <div
        className='note update-note'
      >
        <input
          className='editor'
          type='text'
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button
          className='submit'
          onClick={this.handleSubmitButtonClick}
        >
          Submit
        </button>
        <button
          className='cancel'
          onClick={this.props.closeEditor}
        >
          Cancel
        </button>
      </div>
    );
  }


}

UpdateNote.propTypes = {
  content: PropTypes.string.isRequired,
  updateThisNote: PropTypes.func.isRequired,
  closeEditor: PropTypes.func.isRequired,
};
