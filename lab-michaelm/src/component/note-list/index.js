import React from 'react';
import './_note-list.scss';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render() {
    return(
      <div className="note-list">
        <NoteItem
        notes={this.props.app.state.notes}
        app={this.props.app}
        noteRemove={this.props.noteRemove}
        handleNoteUpdate={this.props.handleNoteUpdate}
        renderIf={this.props.renderIf}
        />
      </div>
    );

  }
}
export default NoteList;
