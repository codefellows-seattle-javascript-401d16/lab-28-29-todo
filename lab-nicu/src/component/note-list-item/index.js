import React from 'react';
import NoteUpdateForm from '../note-update-form';

let renderIf = (test, pass, fail) => test ? pass : fail;

class NoteListItem extends React.Component {
  render() {

    let { note } = this.props;
    return (
      <li key={this.props.keyVal}>
        {
          !note.editing ?
            <div onDoubleClick={() => this.props.handleEdit(note)}>
              <p>{note.content}</p>
              <button onClick={() => this.props.handleDelete(this.props.note)}>Delete Note</button>
            </div> :
            <div>
              <NoteUpdateForm  note={note} handleEdit={this.props.handleEdit}/>
            </div>}

      </li>

    );
  }
}

export default NoteListItem;