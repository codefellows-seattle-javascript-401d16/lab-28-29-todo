// import './_dashboard-container.scss';
import React from 'react'
import uuid from 'uuid/v1'

import NoteAddForm from '../note-add-form'
import NoteList from '../note-list'


class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    // console.log('app!',this.props);
    this.noteAdd = this.noteAdd.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
    this.noteUpdate = this.noteUpdate.bind(this)
  }

  noteAdd(note){
    console.log('this.props.app!!!',this.props.app);
    note.id = new Date()
    this.props.app.setState((state)=> ({
      notes:[...state.notes, note],
      noteCount: state.noteCount+1,
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

  noteUpdate(note) {
  let {app} = this.props
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item
      })
    }))
  }


  render(){
    return (
      <div className='dashboard-container'>
        <NoteAddForm
          handleNoteAdd={this.noteAdd}
          submitTitle='create note'/>
        <NoteList notes={this.props.app.state.notes}
        handleNoteRemove={this.noteRemove}
        handleNoteUpdate={this.noteUpdate}
        />
        <p> sup man! </p>
      </div>
    )
  }
}

export default DashboardContainer
