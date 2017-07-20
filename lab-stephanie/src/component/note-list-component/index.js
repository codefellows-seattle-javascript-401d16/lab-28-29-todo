import React from 'react'
import NoteItem from '../note-item-component'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul id="notes">
        {this.props.notes.map((n, i) => {
          return (
            <li key={i}>
              <NoteItem note={n} noteDelete={this.props.noteDelete} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NoteList
