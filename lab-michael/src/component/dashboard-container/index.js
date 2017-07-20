import './_dashboard-container.scss';
import React from 'react'
import uuid from 'uuid/v1'

import NoteCreateForm from '../note-create-form'


class DashboardContainer extends React.component{
  constructor(props){
    super(props)
    console.log('app!',this.props);
    this.noteCreate = this.noteCreate.bind(this)
  }
  //is this passing the app state through notes:[...state.notes, notes] ?
  expenseCreate(expense){
    note.id = new Date()
    this.props.app.setState(state=> {
      notes:[...state.notes, notes]
    })
  }

  render(){
    return (
      <div>
        <NoteCreateForm handleNoteCreate={this.expenseCreate}
    )
  }
}
