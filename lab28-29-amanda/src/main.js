import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteDashboard from './component/note-dashboard';
import NoteAbout from './component/note-about';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
  }

  componentDidUpdate() {console.log(':::::LE STATE::::', this.state);}

  getApp() {return {state: this.state, setState: this.setState.bind(this)};}

  render() {
    return (
      <main className='app'>
        <h1>React Note Form</h1>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={() => <NoteDashboard app={this.getApp()} />} />
            <Route exact path='/about' component={NoteAbout} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
