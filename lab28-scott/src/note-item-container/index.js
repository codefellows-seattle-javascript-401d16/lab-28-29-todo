import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('props note item', props);
    console.log('this note item', this);
  }


  render(){
    return(
      <div>
        hello note item section
      </div>
    );
  }
}

export default NoteItem;
