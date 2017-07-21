import './style/main.scss';
import './style/_layout.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('main props:\n',this.props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log(':::STATE:::', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
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
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
