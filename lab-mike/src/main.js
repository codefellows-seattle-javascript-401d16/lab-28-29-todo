import './style/main.scss';
// npm modules
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// app modules
import DashboardContainer from './component/dashboard-container';
import AboutContainer from './component/about-container';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.getApp = this.getApp.bind(this);
  }
  componentDidUpdate () {
    console.log('__STATE__', this.state);
  }
  getApp () {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  render () {
    return (
      <main className='app'>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </nav>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/' component={() => <DashboardContainer app={this.getApp()} />} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
