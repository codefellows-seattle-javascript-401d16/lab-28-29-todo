import React from 'react'
import uuid from 'uuid/v1'
import NoteCreateForm from '../note-create-form'

class NoteItem extends React.Component {
  constructor(props){
    super(props)
    console.log('app', this.props)
    this.noteCreate = this.noteCreate.bind(this)
  }

  render(){
    return(
      <div className='note-item-container'>
        <NoteCreateForm handelNoteCreate={this.noteCreate}/>
        <p> Hello Notes</p>
      </div>
    )
  }
}

export default NoteItem
