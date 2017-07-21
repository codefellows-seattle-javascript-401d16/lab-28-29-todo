import uuid from 'uuid/v1';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//import child containers
import AboutContainer from './about-container/index.js';
import DashboardContainer from './dashboard-container/index.js';
import NavBar from './navbar-container/index.js';

//holding my main application state and the routes
//structure by hooks, methods, render
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      totalNotes: 0,
      maxNotes:1,
    };
    this.getApp = this.getApp.bind(this);
  }
  //HOOK
  //show the state in the console
  componentDidUpdate(){
    console.log('--STATE-CHANGE--', this.state);
  }

  //METHODS
  //create app function for sending children data to parent
  getApp(){
    return{
      //return object with whatever the current state is.
      state: this.state,
      //a method that will update app state when you call it.
      setState: this.setState.bind(this),
    };
  }


  render(){
    return(
      <main>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route
              exact path='/'
              component={() => <DashboardContainer app={this.getApp()} />}
            />
            <Route
              exact path='/about'
              component={AboutContainer}
            />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
