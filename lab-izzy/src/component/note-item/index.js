import React from 'react';
import uuid from 'uuid';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.note.id,
      editing: props.note.editing,
      content: props.note.content,
      completed: props.note.completed,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.noteRemove(this.state.id);
  }

  render() {
    return (
      <ul>
        <li>
          <p>{this.state.content}</p>
          <button onClick={this.handleDelete}> Delete Note </button>
        </li>
      </ul>
    );
  }
}


export default NoteItem;
