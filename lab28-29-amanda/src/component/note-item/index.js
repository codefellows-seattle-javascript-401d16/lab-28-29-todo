import React from 'react'
import uuid from 'uuid/v1'
import NoteCreateForm from '../note-create-form'

class NoteItem extends React.Component {
  constructor(props){
    super(props)
    console.log('app', this.props)
  }

  render(){
    return(
      <div className='note-item-container'>
        {this.props.note.title}
      </div>
    )
  }
}

export default NoteItem
