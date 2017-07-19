// import './style/main.scss';

// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// app modules
// Component tree:
// App
//  NoteCreateForm
//  NoteList
//   NoteItem

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: null,
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
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
