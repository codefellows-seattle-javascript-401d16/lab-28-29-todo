import React from 'react';
import ReactDOM from 'react-dom';

//holding my main application

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes: null,
    };
  }

  render(){
    return(
      <div>
        notes app  yay
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
