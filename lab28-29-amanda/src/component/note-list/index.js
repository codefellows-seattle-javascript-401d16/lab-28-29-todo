import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('we are here', this.props.notes);
  }
  render(){
    return(
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <h1>{item.title}</h1>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
