import React from 'react';
import ReactDom from 'react-dom';
import NoteItem from '../note-item';
import NoteForm from '../note-form';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('hello');
    return(
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              {item.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
