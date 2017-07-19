import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ul>
        <NoteItem />
      </ul>
    );
  }
}
