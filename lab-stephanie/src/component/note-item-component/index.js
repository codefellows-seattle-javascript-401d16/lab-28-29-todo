import React from 'react'

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    this.props.noteDelete(this.props.note.id)
  }

  render() {
    return (
      <div>
        {this.props.note.content}
        {this.props.note.id}
        <button onClick={this.handleDelete}>x</button>
      </div>
    )
  }
}

export default NoteItem
