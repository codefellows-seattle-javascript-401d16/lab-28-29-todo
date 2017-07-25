import React from 'react'
import NoteContainer from '../note-container'
import NoteCreateForm from '../note-create-form'

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      editing: this.props.note.editing,
      content: this.props.note.content,
      completed: this.props.note.completed,
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.noteRemove(this.state.id);
  }

  render() {
    return (
      <li>
        <p>{this.state.content}</p>
        <button onClick={this.handleDelete} className='delete-note'>Delete</button>
      </li>
    )
  }
}

export default NoteItem
