import React from 'react';
import NoteItem from '../note-item';

class NoteList extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    // let notes = this.props.notes || [];
    return (
      <div className='note-list'>
        <ul>
          {this.props.notes.map(note =>

            <NoteItem
              key={note.id}
              note={note}
              noteRemove={this.props.noteRemove}
              noteUpdate={this.props.noteUpdate} />
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
