import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ul>
        {this.props.app.state.allNotes.map((note, i) => {
          return (
            <li key={i}>
              <NoteItem app={this.props.app} curNote={note} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
