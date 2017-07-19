import './style/main.scss'

import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import AboutContainer from './component/about-container'
import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
    }

    this.getApp = this.getApp.bind(this)
  }
  componentDidUpdate(){
    console.log('::::STATE::::')
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  render(){
    return(
      <main>
        <div>
          <p> testing APP render </p>
        </div>
      </main>
    )
  }
}
