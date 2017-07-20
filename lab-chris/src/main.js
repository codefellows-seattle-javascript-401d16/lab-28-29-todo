import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteCreate from './component/note-create-form/';
import NoteList from './component/note-list/';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate(){
    console.log('----STATE----', this.state);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return(
      <main>
        <BrowserRouter>
          <div>

            <Route exact path='/' component={() => <NoteCreate app={this.getApp()}/>} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
