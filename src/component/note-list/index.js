import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteList extends React.Component {
  render(){
    return(
      <div className='note-list'>
        <ul>
          {this.props.note.map((item, i) =>
            <li key={i}>
              <p>title: {item.title}</p>
              <p>task: {item.task}</p>
              <button onClick={() => this.props.noteRemove(item)}>
              Delete
              </button>
              <NoteCreateForm
                note={item}
                submitTitle= 'Update Note'
                handleSubmit={(note) => {
                  note.id = item.id;
                  this.props.noteUpdate(note)
                }} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
