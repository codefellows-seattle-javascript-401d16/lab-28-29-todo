import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import DashboardContainer from './component/dashboard-container'
import AboutContainer from './component/about-container'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: [],
    }
    this.getApp = this.getApp.bind(this)
  }

  componentDidUpdate() {console.log('###STATE###', this.state)}

  getApp() {return {state: this.state, setState: this.setState.bind(this)}}

  render() {
    return (
      <main className='app'>
        <h1>To-Do</h1>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() => <DashboardContainer app={this.getApp()} />} />
            <Route exact path='/about' component={AboutContainer} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
