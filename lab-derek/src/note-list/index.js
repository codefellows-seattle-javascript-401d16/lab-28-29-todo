import React from 'react';
import NoteItem from '../note-item/index.js';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>
        <p>Im a noteList</p>
        <NoteItem />
      </div>
    );
  }
}

export default NoteList;
