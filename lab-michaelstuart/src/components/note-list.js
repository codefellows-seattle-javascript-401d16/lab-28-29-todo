import React from 'react';
import NoteItem from './note-item';

export default props => (
  <ul>
    {props.notes.map(note =>
      <NoteItem
        key={note.id}
        note={note}
        removeNote={props.removeNote}
        updateNote={props.updateNote} />)}
  </ul>
)
