import React from 'react'

import NoteForm from '../note-form'
import NoteList from '../note-list'

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props)

    this.noteCreate = this.noteCreate.bind(this)
    this.noteUpdate = this.noteUpdate.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
  }

  noteCreate(note) {this.props.app.setState(state => ({notes: [...state.notes, note]}))}

  noteUpdate(note) {
    this.props.app.setState(state => ({notes: state.notes.map(item => {
      console.log('item.id', item.id)
      console.log('note.id', note.id)
      return item.id === note.id ? note : item})}))
  }

  noteRemove(note) {this.props.app.setState(state => ({notes: state.notes.filter(item => item.id !== note.id)}))}

  render() {
    let {app} = this.props
    return (
      <div className='dashboard-container'>
        <NoteForm handleSubmit={this.noteCreate} buttonText='submit'/>
        <NoteList
          notes={app.state.notes}
          noteUpdate={this.noteUpdate}
          noteRemove={this.noteRemove}
        />
      </div>
    )
  }
}

export default DashboardContainer
