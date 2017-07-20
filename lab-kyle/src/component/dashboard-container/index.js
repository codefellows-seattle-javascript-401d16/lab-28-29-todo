import React from 'react'
import uuid from 'uuid/v1'

import NoteForm from '../note-form'
import NoteList from '../note-list'

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props)

    this.noteCreate = this.noteCreate.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
  }

  noteCreate(note) {
    note.id = uuid()
    this.props.app.setState(state => ({notes: [...state.notes, note]}))
  }

  noteRemove(note) {
    this.props.app.setState(state => ({notes: state.notes.filter(item => item.id !== note.id)}))
  }

  render() {
    let {app} = this.props
    return (
      <div className='dashboard-container'>
        <NoteForm handleSubmit={this.noteCreate} />
        <NoteList
          notes={app.state.notes}
          noteRemove={this.noteRemove}
        />
      </div>
    )
  }
}

export default DashboardContainer
