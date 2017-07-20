import React from 'react';

class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      console.log('note-list: this.props:\n',this.props)
    )
  }
}

export default NoteList
