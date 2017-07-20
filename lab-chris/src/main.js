import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidUpdate(){
    console.log('----STATE----', this.state);
  }

  render(){
    return(
      <main>
        <h1>hello </h1>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
