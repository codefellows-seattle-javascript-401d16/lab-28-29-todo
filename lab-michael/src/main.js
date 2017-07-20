
import './style/main.css'
import react from 'react'
import reactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import uuid from 'uuid'


class extends React.component() {
  constructor(props){
    super(props)
    this.state = {
      notes:[],
      noteCount:0,
    }

  }

  componentDidUpdate(){
    console.log(':::STATE:::', this.state);
  }

  getAppState(){
    return (
      state: this.state,
      setState:this.setState.bind(this)
    )
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={TestContainer} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}


let div = document.createElement('div')
document.body.appendChild(div)
ReactDom.render(</app >, div)
