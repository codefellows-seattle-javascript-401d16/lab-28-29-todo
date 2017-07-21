// import './_dashboard-container.scss';
import React from 'react'
import uuid from 'uuid/v1'

import NoteAddForm from '../note-add-form'
import NoteDeleteForm from '../note-delete-form'


class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    // console.log('app!',this.props);
    this.noteAdd = this.noteAdd.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
  }
  //is this passing the app state through notes:[...state.notes, notes] ?
  noteAdd(note){
    console.log('this.props.app.notes',this.props.app.notes);
    note.id = new Date()
    this.props.app.setState((state)=> ({
      notes:[...state.notes, note],
    }))
    // console.log('this.props!!',this.props);
  }

  noteRemove(note){
    let {app} = this.props
    app.setState(previousState => ({
      notes: previousState.notes.filter((item) => {
        return item.id !== note.id
      })
    }))
  }


  render(){
    return (
      <div className='dashboard-container'>
        <NoteAddForm handleNoteAdd={this.noteAdd} />
        <NoteDeleteForm handleNoteRemove={this.noteRemove}/>
        <p> sup man! </p>
      </div>
    )
  }
}

export default DashboardContainer
