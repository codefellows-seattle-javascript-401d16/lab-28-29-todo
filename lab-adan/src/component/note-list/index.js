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
        {this.props.getApp().state.notes.map((note, i) => {
          return (
            <li key={i}>
              <NoteItem getApp={this.props.getApp} currentNote={note} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
