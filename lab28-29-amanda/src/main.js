import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import NoteCreateForm from './component/note-create-form'
import NoteItem from './component/note-item'
import NoteList from './component/note-list'
import uuid from 'uuid/v1'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }
    this.noteCreate = this.noteCreate.bind(this)
  }
  componentDidUpdate(){
    console.log('::::STATE::::')
  }

  noteCreate(note){
    note.id = uuid()
    this.setState( state => ({
      notes: [...state.notes, note],
    }))

  }

  render(){
    return(
      <main>
        <div>
          <NoteCreateForm note={this.note} noteCreate={this.noteCreate} />
          <NoteList notes={this.state.notes} />
          <div className="inputBox"> </div>
          <p>testing APP render </p>
        </div>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
document.body.appendChild
