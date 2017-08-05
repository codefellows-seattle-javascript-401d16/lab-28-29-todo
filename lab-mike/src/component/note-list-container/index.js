import React from 'react';

import NoteItemContainer from '../note-item-container';

class NoteListContainer extends React.Component {
  render () {
    return (
      <div className='note-list'>
        <h1>Notes</h1>
        <ul>
          {this.props.notes.map((item, i) =>
            <NoteItemContainer
              key={i}
              note={item}
              noteUpdate={this.props.noteUpdate}
              noteDelete={this.props.noteDelete}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default NoteListContainer;
