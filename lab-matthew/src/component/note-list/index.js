import React from 'react';
import NoteCreateForm from '../note-create-form';
import NoteItem from '../note-item';

class NoteList extends React.Component {
  render(){
    return (
      <div className='note-list'>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i}>
              <NoteItem
                currentNote={item}
                handleSubmit={(note) => {
                  note.id = item.id;
                  this.props.noteUpdate(note);
                }}
                noteRemove={this.props.noteRemove}
                app={this.props.app} />

              
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// <NoteItem notes={this.props.app.state.notes} app={this.props.app} />
export default NoteList;
