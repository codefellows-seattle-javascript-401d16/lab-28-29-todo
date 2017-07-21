import React from 'react';
import NoteForm from '../note-form';

class NoteList extends React.Component {
  render(){
    return (
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <p>id: {item.id}</p>
              <p>editing: {item.editing}</p>
              <p>completed: {item.completed}</p>
              <p>content: {item.content}</p>
              <NoteForm
                note={item}
                submitContent='Update Note'
                handleSubmit={(note) => {
                  note.id = item.id,
                  this.props.noteUpdate(note)
                }} />
              <button onClick={() => this.props.noteRemove(item)}>
              Delete Note
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
