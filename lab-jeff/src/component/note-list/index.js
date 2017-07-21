import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {

  render() {
    return(
      <div className='note-list'>
        <ul>
          {this.props.notes.map((note, i) =>
            <li key={i}>
              <button onClick={() => this.props.handleDelete(note)}>
              delete
              </button>

              <p> content: {note.content} </p>

            </li>
          )};
        </ul>
      </div>
    );
  }
}

export default NoteList;
