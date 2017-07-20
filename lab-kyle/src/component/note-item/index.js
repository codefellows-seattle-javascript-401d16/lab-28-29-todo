import React from 'react'

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='note-item'>
        <p>{this.props.item.content}</p>
        <button onClick={() => this.props.noteRemove(this.props.item)} > X </button>
      </div>
    )
  }
}

export default NoteItem
