import React from 'react';

import NoteCreateFrom from '../note-create-form';
import NoteItem from '../note-item';


class NoteList extends React.Component {
  constructor(props) {
    super(props);
    console.log('app', this.props);
  }

  render() {
    return(
      <div className='note-list'>
        <NoteItem notes={this.props.app.state.notes} app={this.props.app} />
      </div>
    );
  }
}

export default NoteList;
