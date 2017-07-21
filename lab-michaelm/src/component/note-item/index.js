import React from 'react';
import './_note-item.scss';
class NoteItem extends React.Component {

  render() {
    return (
      <ul className="note-item">
        {this.props.notes.map((item, i) =>
          <li key={i} value={i}>
            {item.content}
          <button onClick={() => this.props.noteRemove(item)}>delete</button>
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
