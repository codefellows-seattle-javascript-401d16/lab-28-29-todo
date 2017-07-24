import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';

// constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    // this.getApp = this.getApp.bind(this);
  }

  //hooks
  componentDidUpdate() {
    console.log(':::STATE:::', this.state);
  }


  //methods
  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }


  // render
  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() => <DashboardContainer app={this.getApp()}/>}/>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
