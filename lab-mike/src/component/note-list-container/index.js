import React from 'react';

import NoteItemContainer from '../note-item-container';

class NoteListContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>note list container</h1>
        <NoteItemContainer
          noteUpdate={this.props.noteUpdate}
          noteDelete={this.props.noteDelete}
          notes={this.props.notes}
        />
      </div>
    )
  }
}

export default NoteListContainer;
