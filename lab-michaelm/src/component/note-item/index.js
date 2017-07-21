import React from 'react';
import './_note-item.scss';
import NoteUpdateForm from '../note-update-form';

class NoteItem extends React.Component {

  render() {
    console.log('note item THIS:\n',this);
    return (
      <ul className="note-item">
        {this.props.notes.map((item, i) =>
          <li key={i} value={i}>
            {item.content}
          <button onClick={() => this.props.noteRemove(item)}>delete</button>
          <NoteUpdateForm
            app={this.props.app}
            submitTitle='update'
            handleNoteUpdate={this.props.handleNoteUpdate}
            noteID={item.id}
          />
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
