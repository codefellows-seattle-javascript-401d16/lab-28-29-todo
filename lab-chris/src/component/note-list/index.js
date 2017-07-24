import './note-list.scss';
import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('note list', this.props.app.state);
  }

  render(){
    return(
      <div className='note-list'>
        <ul>
          {this.props.app.state.notes.map((note, i) =>
            <li key={i}>
              <NoteItem note={note} app={this.props.app} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
