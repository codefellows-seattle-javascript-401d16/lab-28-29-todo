import './style/main.scss'

import uuid from 'uuid'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import NoteList from './component/note-list-component'
import NoteCreateForm from './component/note-create-form-component'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }

    this.noteDelete = this.noteDelete.bind(this)
    this.getApp = this.getApp.bind(this)
    this.noteCreate = this.noteCreate.bind(this)
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }
  noteCreate(note) {
    note.id = uuid.v1()
    note.edited = false
    note.completed = false
    this.setState(state => ({
      notes: [...state.notes, note],
    }))
    console.log(this.state.notes)
  }

  noteUpdate(note) {
    let notes = this.state.notes.map(n => {
      return n.id == note.id ? note : n
    })
    this.setState({ notes })
  }

  noteDelete(id) {
    let notes = this.state.notes.filter(n => n.id !== id)

    this.setState({ notes })
  }

  render() {
    return (
      <div className="note-container">
        <h1>To Do</h1>
        <NoteCreateForm noteCreate={this.noteCreate} />
        <NoteList
          notes={this.state.notes}
          noteDelete={this.noteDelete}
          noteUpdate={this.noteUpdate}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
