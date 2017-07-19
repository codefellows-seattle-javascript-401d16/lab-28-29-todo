import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//import child containers
import './note-create-form-container/note-create-form.js';
import './note-item-container/note-item.js';
import './note-list-container/note-list.js';

//holding my main application

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: null,
    };
  }

  //create app function for sending children data to parent
  appGet(){
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
            notes app  yay
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
