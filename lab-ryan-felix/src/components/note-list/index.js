import React from 'react';
import PropTypes from 'prop-types';

import Note from './note';
import UpdateNote from '../update-note';

function renderIf(condition, component, fallback) {
  return condition ? component : fallback;
}

export default class NoteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      noteEditorsOpen: [],
    };
  }

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
                {renderIf(this.state.noteEditorsOpen.includes(note.id),
                  <UpdateNote
                    content={note.content}
                    updateThisNote={(newContent) => this.props.updateNote(note.id, newContent)}
                    closeEditor={() => this.setState(prevState => ({
                      noteEditorsOpen: prevState.noteEditorsOpen.filter(id => id !== note.id),
                    }))}
                  />,
                  <Note
                    content={note.content}
                    removeThisNote={() => this.props.removeNote(note.id)}
                    editThisNote={() => this.setState(prevState => ({
                      noteEditorsOpen: [note.id, ...prevState.noteEditorsOpen],
                    }))}
                  />
                )
                }
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
