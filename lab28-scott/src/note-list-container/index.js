import './note-list.scss';
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
      <div className='note-list'>
        <h2>
        * Your Notes *
        </h2>
        <ul className='note'>
          {this.props.notes.map((note, i) => {
            return(
              <li key={i}>
                <p>Content: {note.content}</p>
                <NoteUpdateForm
                  noteUpdate={this.props.noteUpdate}
                  note={note}
                />
                <button
                  onClick={() => this.props.noteRemove(note)}>
                  Delete Note
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
