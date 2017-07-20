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
        // {
        //   id: 'Izzy',
        //   editing: true,
        //   content: 'I love Code Fellows!',
        //   completed: false,
        // },
      ],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('component updated', this.state);
  }

  getApp(){
    console.log('STAAAATE^^^^^^^^', this.state);
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

// identical statements
// <DashboardContainer app = {this.getApp()} />   <--- JSX
// new DashboardContainer({app: this.getApp()})  <--- Vanilla JS

ReactDom.render(<App />, document.getElementById('root'));
