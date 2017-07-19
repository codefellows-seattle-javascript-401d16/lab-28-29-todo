import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import AboutContainer from './component/about-container';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <main>
        <BrowserRouter>
          <Route exact path='/about' component={AboutContainer} />
        </BrowserRouter>
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
