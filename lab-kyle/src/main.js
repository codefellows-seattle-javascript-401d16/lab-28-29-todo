import React from 'react';
import ReactDom from 'react-dom';

import Dashboard from './component/dashboard-container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  ComponentDidUpdate(){
    console.log('###STATE###', this.state);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render() {
    return (
      <main>
        <div>
          <h1>Notes</h1>
          <Dashboard app={this.getApp()}/>
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
