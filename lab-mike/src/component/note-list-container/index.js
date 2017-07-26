import React from 'react';
import uuid from 'uuid/v1';

import NoteItemContainer from '../note-item-container';

class NoteListContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>note list container</h1>
        <NoteItemContainer />
      </div>
    )
  }
}

export default NoteListContainer;
