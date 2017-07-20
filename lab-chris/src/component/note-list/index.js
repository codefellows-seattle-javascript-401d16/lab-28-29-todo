import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <NoteItem />
      </div>
    );
  }
}

export default NoteList;
