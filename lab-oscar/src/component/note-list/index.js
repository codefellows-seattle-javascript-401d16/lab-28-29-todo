import React from 'react';

import NoteItemDelete from '../note-delete';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>test</h1>
        <ul>
          {this.props.note.map((item, i) => {
            return (
              <li key={i}>
                <NoteItemDelete noteItem={item} notes={this.props.app}/>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
