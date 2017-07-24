import React from 'react';
import NoteForm from '../note-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      complete: false,
    };
  }
  render() {
    let {note} = this.props;
    return (
      <li>
        <div>
          <p>id: {note.id}</p>
          <p>content: {note.content}</p>
          <button onClick={() => this.props.noteRemove(note)}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}
export default NoteItem;
