import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
  }
  
  componentDidUpdate(){
    console.log('...STATE....', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }
  render(){
    return(
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() => <DashboardContainer app={this.getApp()}/>}/>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));