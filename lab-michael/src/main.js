
import './style/main.css'
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import uuid from 'uuid'

import DashboardContainer from './component/dashboard-container'
import TestContainer from './component/test-container'
import NoteDeleteForm from './component/note-delete-form'

class App extends React.Component {
  constructor(props){
    super(props)
    console.log('props',props);
    this.state = {
      notes:[],
      noteCount:0,
    }
  }

  componentDidUpdate(){
    console.log(':::STATE:::', this.state);
  }

  getAppState(){
    return {
      state: this.state,
      setState:this.setState.bind(this),
    }
  }

  render() {
    return (
      <main>
        <div className='navbar'>
          <h1> Note Generator ! </h1>
        </div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={TestContainer} />
          <Route
          exact
          path='/dashboard'
          component={()=> <DashboardContainer app={this.getAppState()}/>}/>
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

// <div>
// <NoteDeleteForm app={this.getAppState()}/>
// </div>
//saving this! this renders things to the page
// {this.state.notes.map((note, i) => {
//   console.log(note);
//   return (
//     <li key={i}>
//     Subject:
//     {note.subject}
//     Comment :
//     {note.textContent}
//     </li>
//
//   )
// })}


ReactDom.render(<App />, document.getElementById('app'))
