import React from 'react';


import NoteCreateForm from '../note-create-form';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('app', this.props);
  }


  render(){
    console.log('note-list', this.props.app.setState);
    return (
      <div className='note-list'>
        <p> Hello note-list </p>
        <NoteItem notes={this.props.app.state.notes} app={this.props.app} />

      </div>
    );
  }
}

export default NoteList;
