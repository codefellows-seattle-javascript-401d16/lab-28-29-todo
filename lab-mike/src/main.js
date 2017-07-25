import './style/main.scss';
//npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//app modules
import NoteCreateForm from './component/note-create-form';
import NoteItemContainer from './component/note-item-container';
import NoteListContainer from './component/note-list-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
    this.getApp = this.getApp.bind(this);
  }
  componentDidUpdate () {
    console.log('__STATE__', this.state)
  }
  getApp () {
    return ({
      state: this.state,
      setState: this.setState.bind(this),
    })
  }

  render() {
    return (
        <main>
          <BrowserRouter>
            <div>
              <Route exact path = '/' component={}
              <Route exact path'/dashboard' component = {() => <DashboardContainer app={this.getApp()} /> } />
            </div>
          </BrowserRouter>
        </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
