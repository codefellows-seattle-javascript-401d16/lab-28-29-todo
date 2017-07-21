import './_note-list.scss';

import React from 'react';

import NoteItemDelete from '../note-delete';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='list-item'>
        {this.props.app.state.notes != ''? <h1>Todo List</h1> : <h1>No Notes</h1>}

        <ul>
          {this.props.note.map((item, i) => {
            return (
              <li key={i}>
                <div>
                  <NoteItemDelete noteItem={item} notes={this.props.app}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
