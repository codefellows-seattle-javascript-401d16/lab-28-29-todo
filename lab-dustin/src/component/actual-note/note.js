import React from 'react';
import NoteContainer from '../note-container';
import NoteCreateForm from '../note-create-form';

class Note extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id: this.props.note.id,
      editing: this.props.note.editing,
      content: this.props.content,
      title: this.props.title,
      completed: this.props.completed,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.noteRemove(this.state.id);
  }
  render() {
    return(
      <li>
        <p>Title: {this.props.note.title}</p>
        <p>Content: {this.props.note.content}</p>
        <button onClick={this.handleDelete}>DELETE</button>
      </li>
    );
  }
}

export default Note;
