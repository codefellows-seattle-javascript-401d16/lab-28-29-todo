import React from 'react';
import NoteUpdateForm from '../note-update-form-container';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
        <h2> Your Notes </h2>
        <ul className='note'>
          {this.props.notes.map((note, i) => {
            return(
              <li key={i}>
                <p>Title: {note.title}</p>
                <p>Content: {note.content}</p>
                <button
                  onClick={() => this.props.noteRemove(note)}>
                  Delete Note
                </button>
                <NoteUpdateForm
                  noteUpdate={this.props.noteUpdate}
                  note={note}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
