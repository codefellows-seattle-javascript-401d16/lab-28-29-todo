import uuid from 'uuid';
import React from 'react';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDelete(e){
    this.props.noteRemove(this.props.note.id);
  }

  handleDoubleClick(e){
    let note = Object.assign({}, this.props.note, {editing: true});
    this.props.noteUpdate(note);
  }

  render() {
    return (
      <li>
        {this.props.note.editing ? (
          <NoteUpdateForm
            note={this.props.note}
            noteUpdate={this.props.noteUpdate} />
        ) : (
          <div>
            <p onDoubleClick={this.handleDoubleClick}>
              {this.props.note.content}
            </p>
            <button type='delete' className='delete' onClick={this.handleDelete}>
              Delete Note
            </button>
          </div>
        )}
      </li>
    );
  }
}


export default NoteItem;
