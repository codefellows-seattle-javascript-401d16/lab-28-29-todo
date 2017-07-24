import React from 'react'
import NoteForm from '../note-form'


let renderIf = (t, c) => t ? c : undefined

class NoteItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }

  render(){
    let {note} = this.props
    return (
      <li onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <p> Subject: {note.subject} </p>
            <p> Text Content: {note.textContent} </p>
            <button className='delete-button'
            onClick={() => this.props.noteRemove(note)}>
              Delete
            </button>
          </div>)}

        {renderIf(this.state.editing,
          <NoteForm
            note={note}
            submitTitle='Update Note'
            handleNoteAdd={(item) => {
              item.id = note.id
              this.props.noteUpdate(item)
            }} />)}
      </li>
    )
  }
}

export default NoteItem
