import React from 'react';
import NoteUpdateForm from './note-update-form';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      content: this.props.note.content,
      completed: this.props.note.completed,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDelete() {
    this.props.removeNote(this.state.id);
  }

  handleDoubleClick() {
    this.props.toggleMode();
  }

  render() {
    return (
      <li>
        {this.props.editing ? (
          <NoteUpdateForm
            note={this.state}
            updateNote={this.props.updateNote}/>
        ) : (
          <span>
            <p onDoubleClick={this.handleDoubleClick}>{this.state.content}</p>
            <button className='delete' onClick={this.handleDelete}>Delete</button>
          </span>
        )}
      </li>
    )
  }
}
