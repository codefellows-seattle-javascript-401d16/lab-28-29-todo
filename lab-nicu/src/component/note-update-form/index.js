import React from 'react';



class NoteEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.note.content,
    };
    this.handleEditFormChange = this.handleEditFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEditFormChange(e) {
    this.setState({ content: e.target.value });
  }



  handleFormSubmit(e) {
    e.preventDefault();
    this.props.note.content = this.state.content;
    this.props.handleEdit(this.props.note);

  }

  render() {
    return (
      <form className='note-form' onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          value={this.state.content}
          onChange={this.handleEditFormChange}
          placeholder='Enter todo here...'
        />
        <button>
          Done Editing
        </button>
      </form>
    );
  }
}

export default NoteEditForm;