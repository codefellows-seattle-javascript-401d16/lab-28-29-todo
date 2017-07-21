import React from 'react';

class NoteUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let note = {
      id: this.props.note.id,
      content: this.state.content,
      editing: false,
    };
    this.props.noteUpdate(note);
  }

  handleCancel(e){
    e.preventDefault();
    let note = {
      id: this.props.note.id,
      content: this.props.note.content,
      editing: false,
    };
    this.props.noteUpdate(note);
  }

  handleChange(e){
    let content = e.target.value;
    this.setState({content});
  }

  render(){
    return (
      <div>
        <input
          type='text'
          value={this.state.content}
          onChange={this.handleChange} />

        <button type='edit note' onClick={this.handleSubmit} className='update-note' >
          Edit Note
        </button>

        <button type='cancel edit' onClick={this.handleCancel} className='cancel-note'>
          Cancel Edit
        </button>

      </div>
    );
  }
}
