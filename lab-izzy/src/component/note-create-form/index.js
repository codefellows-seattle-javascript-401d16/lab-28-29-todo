import React from 'react';
import PropTypes from 'prop-types';

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
    const content = e.target.value;
    this.setState({content});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className='input-change'
          placeholder='create a new to do list'
          onChange={this.handleChange}
        />
        <button type='submit'> Submit </button>
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  addNote: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default NoteCreateForm;
