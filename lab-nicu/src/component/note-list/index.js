import React from 'react';

import NoteListItem from '../note-list-item';

class NoteList extends React.Component{

  render(){
    return(
      <div className='notes-list'>
        <ul>
          {
            this.props.notes.map((note, index) => <NoteListItem keyVal={index} note={note} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete}/>)
          }
        </ul>
      </div>
    );
  }
}

export default NoteList;