import uuid from 'uuid';
import React from 'react';

import './style/main.scss';

import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';
import AboutContainer from './component/about-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
      ],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('component updated', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() =>
              <DashboardContainer app={this.getApp()} />} />
            <Route exact path='/about' component={AboutContainer} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
