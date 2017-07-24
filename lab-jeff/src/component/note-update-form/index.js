import React from 'react';

let renderIf = (test, component) => test ? component : undefined;

class NoteUpdateForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
      id: this.props.noteID,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.handleNoteUpdate(this.state);
  }

  render(){
    return (
      <form className="note-update-form" onSubmit={this.handleSubmit} >

        <textarea
          autoFocus
          placeholder="enter new text"
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.submitTitle} </button>

      </form>
    );
  }
}

export default NoteUpdateForm;
