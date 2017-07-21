import React from 'react'
import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list'

class NoteContainer extends React.Component {
  constructor(props){
    super(props)
    this.noteCreate = this.noteCreate.bind(this)
    this.noteEdit = this.noteEdit.bind(this)
    this.noteRemove = this.noteRemove.bind(this)
  }

  noteCreate(note){
    let {app} = this.props
    app.setState( state => ({
      notes: [...state.notes, note],
    }))
  }

  noteRemove(note){
    let {app} = this.props
    app.setState(state => ({
      notes: state.notes.filter((item) => {
        return item.id !== note.id
      })
    }))
  }

  noteEdit(note){
    let {app} = this.props
    app.setState(state => ({
      notes: state.notes.map((item) => {
        return item.id == note.id ? note : item
      })
    }))
  }

  render(){
    let {app} = this.props
    return (
      <div className='note-container'>
        <NoteCreateForm
          handleSubmit={this.noteCreate}
          submitTitle='Note Me'
         />
        <NoteList
          noteEdit={this.noteEdit}
          noteRemove={this.noteRemove}
          notes={app.state.notes}
          />
      </div>
    )
  }
}

export default NoteContainer
