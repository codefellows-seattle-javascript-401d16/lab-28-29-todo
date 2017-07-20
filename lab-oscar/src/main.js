import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import AboutContainer from './component/about-container';
import NoteItem from './component/note-item';
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
    console.log(':::STATE:::', this.state);
  }

  getApp(){
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render(){
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/' component={() => <NoteItem app={this.getApp()} />} />
          </div>
        </BrowserRouter>
        <NoteList note={this.state.notes} app={this.getApp()}/>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
