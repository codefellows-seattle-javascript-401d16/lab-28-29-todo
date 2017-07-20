import React from 'react';
import NoteItem from '../note-item';
import NoteForm from '../note-form';

class NoteList extends React.Component {
  render() {
    return (
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.noteRemove(item)}>
                delete
              </button>

              <NoteForm
                note={item}
                buttonName='edit note'
                handleSubmit={(note) => {
                  note.id = item.id;
                  this.props.noteUpdate(note);
                }} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;
