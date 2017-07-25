
import React from 'react'

import NoteCreateForm from '../note-create-form';
import NoteItem from '../note-create-form';
import NoteList from '../note-list'

class NoteContainer extends React.Component {
  constructor(props){
    super(props)
    this.noteCreate = this.noteCreate.bind(this)
  }

  noteCreate(note){
    this.props.app.setState( state => ({
      notes: [...state.notes, note],
    }))
  }

  render(){
    return (
      <div className='note-container'>
        <NoteCreateForm
          handleNoteCreate={this.noteCreate}
         />
        <p>note arrived</p>
      </div>
    )
  }
}

export default NoteContainer
