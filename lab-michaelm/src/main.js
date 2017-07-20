import './style/main.scss'

// npm modules
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

// app modules
import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';
import NoteList from './component/note-list';


// App's job is to hold all applicaiton state
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log(':::STATE:::', this.state)
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render(){
    return (
      <main>
        <BrowserRouter>
          <div>

            <Route
            exact path='/'
            component={() => <DashboardContainer app={this.getApp()} />} />

            <Route
            exact path='/about'
            component={AboutContainer} />

          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
