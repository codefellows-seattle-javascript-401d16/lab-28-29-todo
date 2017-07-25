import React from 'react'
import NoteForm from '../note-form'


let renderIf = (t, c) => t ? c : undefined

class CategoryItem extends React.Component {
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
          <div className='note-text'>
            <p> <span>Subject:</span> {note.subject} </p>
            <p> <span>Text Content:</span> {note.textContent} </p>
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

export default CategoryItem
