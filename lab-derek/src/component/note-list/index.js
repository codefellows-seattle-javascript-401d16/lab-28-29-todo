import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props);
  }

  render(){
    return (
      <div className='note-list'>
        <NoteItem notes={this.props.app.state.notes}/>
      </div>
    );
  }
}

export default NoteList;
