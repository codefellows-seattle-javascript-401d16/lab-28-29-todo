import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import AboutContainer from './component/about-container';
import PortalContainer from './component/portal-container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: null,

    };
  }

  render(){
    return (
      <main>
        <BrowserRouter>
          <div>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/portal' component={PortalContainer} />
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
