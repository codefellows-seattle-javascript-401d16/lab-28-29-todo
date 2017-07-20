import React from 'react';
import ReactDom from 'react-dom';
import NoteContainer from '../note-container';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ul> {this.props.notes.map((item, i) => {
        return(
          <li key={i}>
          </li>
        );
      })}
      </ul>
    );
  }
}

export default NoteList;
