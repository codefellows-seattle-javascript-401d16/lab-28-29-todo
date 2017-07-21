// import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import AboutContainer from './component/about-container';
import DashBoardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      note: [],
    };
    this.getApp = this.getApp.bind(this);
  }
  componentDidUpdate(){
    console.log('___STATE___', this.state);
  }
  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/'
              component={() => <DashBoardContainer app={this.getApp()} />} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
