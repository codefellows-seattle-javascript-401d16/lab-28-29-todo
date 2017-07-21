// import './style/main.scss';

// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// app modules
import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props){
    super(props);
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

  render() {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <p> TODO Notes </p>
            <DashboardContainer app={this.getApp()} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
