// import './_dashboard-container.scss';
import React from 'react'
import uuid from 'uuid/v1'

import NoteCreateForm from '../note-create-form'


class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    // console.log('app!',this.props);
    this.noteCreate = this.noteCreate.bind(this)
  }
  //is this passing the app state through notes:[...state.notes, notes] ?
  noteCreate(note){
    console.log('this.props.app.notes',this.props.app.notes);
    note.id = uuid()
    this.props.app.setState((state)=> ({
      notes:[...state.notes, note],
    }))
    // console.log('this.props!!',this.props);
  }

  render(){
    return (
      <div className='dashboard-container'>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
        <p> sup man! </p>
      </div>
    )
  }
}

export default DashboardContainer
