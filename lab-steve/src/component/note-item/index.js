import React from 'react';
import NoteForm from '../note-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    let {note} = this.props;
    return (
      <li onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <p>id: {note.id}</p>
            <p>content: {note.content}</p>
            <button onClick={() => this.props.noteRemove(note)}>
              Delete
            </button>
          </div>
        )}
        {renderIf(this.state.editing,
          <NoteForm
            note={note}
            submitContent='Update Note'
            handleSubmit={(data) => {
              data.id = note.id,
              this.props.noteUpdate(data);
            }} />
        )}
      </li>
    );
  }
}
export default NoteItem;
