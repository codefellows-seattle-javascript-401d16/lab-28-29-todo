import React from 'react';
import NoteUpdateForm from './note-update-form';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDelete() {
    this.props.removeNote(this.props.note.id);
  }

  handleDoubleClick() {
    this.props.updateNote(Object.assign({}, this.props.note, { editing: true }));
  }

  render() {
    return (
      <li>
        {this.props.note.editing ? (
          <NoteUpdateForm note={this.props.note} updateNote={this.props.updateNote}/>
        ) : (
          <span>
            <p onDoubleClick={this.handleDoubleClick}>{this.props.note.content}</p>
            <button className='delete' onClick={this.handleDelete}>Delete</button>
          </span>
        )}
      </li>
    )
  }
}
