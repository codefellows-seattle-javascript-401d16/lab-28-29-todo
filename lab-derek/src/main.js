import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import uuid from 'uuid/v1';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
    };
  }

  render(){
    return (
      <div>
        <h1> hello todo app </h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
