import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import NoteForm from './component/note-form';
import NoteContainer from './component/note-container';
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
    console.log('::::STATE::::', this.state);
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    let {app} = this.props;
    return(
      <main className='app'>
        <div>
          <NoteContainer app={this.getApp()}
          />
          <NoteList notes={this.state.notes} />
          <div className="inputBox"> </div>
          <p>testing APP render </p>
        </div>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
document.body.appendChild;
