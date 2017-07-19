import React from 'react'
import NoteItem from '../note-item'

class NoteList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul>
        {this.props.notes.map(note =>
          <NoteItem key={note.id} note={note} noteRemove={this.props.noteRemove}/>)}
      </ul>
    )
  }
}

export default NoteList
