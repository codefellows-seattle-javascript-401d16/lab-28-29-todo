import React from 'react';
import NoteItem from '../note-item/';

class NoteList extends React.Component {
  constructor(props){
    super(props);
    console.log('note list', this.props.app.state);
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.app.state.notes.map((note, i) =>
            <li key={i}>
              <NoteItem notes={this.props.app.state.notes} app={this.props.app} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
