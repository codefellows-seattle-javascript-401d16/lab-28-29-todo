import './_dashboard-container.scss';
import React from 'react'
import uuid from 'uuid/v1'

import NoteForm from '../note-form'
import NoteList from '../note-list'


class DashboardContainer extends React.Component{
  constructor(props){
    super(props)
    console.log('app!',this.props);
    this.noteAdd = this.noteAdd.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
    this.noteUpdate = this.noteUpdate.bind(this)
  }

  noteAdd(note){
    console.log('this.props.app!!!',this.props.app);
    note.id = uuid()
    this.props.app.setState((state)=> ({
      notes:[...state.notes, note],
      noteCount: state.noteCount+1,
    }))
    // console.log('this.props!!',this.props);
  }

  noteRemove(note){
    let {app} = this.props
    this.props.app.setState((state)=> ({
      noteCount: state.noteCount-1,
    }))
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

      <h6> Note Count: {this.props.app.state.noteCount} </h6>
        <NoteForm
          handleNoteAdd={this.noteAdd}
          submitTitle='Create Note'/>


        <NoteList
        notes={this.props.app.state.notes}
        handleNoteRemove={this.noteRemove}
        handleNoteUpdate={this.noteUpdate}
        />
      </div>
    )
  }
}

export default DashboardContainer
