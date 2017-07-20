// import './style/main.scss';

// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// app modules
// import NoteItem from './component/note-item/index.js';
import NoteList from './component/note-list/index.js';
import NoteCreateForm from './component/note-create-form/';
// Component tree:
// App
//  NoteCreateForm
//  NoteList
//   NoteItem

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
      <main>
        <BrowserRouter>
          <div>
            <p> Soli Deo Gloria</p>
            <NoteCreateForm app={this.getApp()} />
            <NoteList app={this.getApp()} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
