import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom';

import NoteList from './component/note-list';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };

    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('<<<<<<<<<<<<<<<STATE>>>>>>>>>>>>>', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return (
      <div>
        <h1> hello todo app </h1>
        <BrowserRouter>
          <div>
            <Router exact path='/notelist'
              component={() => <NoteList app={this.getApp()} />} /> 
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
