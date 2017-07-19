import React from 'react';
import PropTypes from 'prop-types';

import Note from './note';

function renderIf(condition, component, fallback) {
  return condition ? component : fallback;
}

export default class NoteList extends React.Component {

  render() {
    return (
      <div className="note-list">
        <h1>To Dos</h1>
        <ul>
          {renderIf(
            this.props.notes.length > 0,
            (this.props.notes.map(note =>
              <li
                key={note.id}
              >
                <Note
                  content={note.content}
                  removeThisNote={() => this.props.removeNote(note.id)}
                />
              </li>
            )),
            <p>No to-dos. Add some!</p>
          )}
        </ul>
      </div>
    );
  }

}

NoteList.propTypes = {
  notes: PropTypes.array,
  removeNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};
