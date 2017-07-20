import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('props from list: ', props);
    console.log('this from list: ', this);
  }

  render(){
    return(
      <div>
        the note LIST
      </div>
    );
  }
}

export default NoteList;
