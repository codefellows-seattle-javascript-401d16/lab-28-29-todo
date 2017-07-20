import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    this.handleNoteDelete = this.handleNoteDelete.bind(this);
  }

  handleNoteDelete(e){
    e.preventDefault();
    console.log('hit note delete');
    console.log('NOTEITEM:', this.state);
    console.log('delete thisprops', this.props);
    console.log('delete event.target', e.target.value );
    console.log('delete thispropsnotelistid', this.props.noteList.id);
  }

  render(){
    return(
      <div>
        <h2>Note Item Section</h2>
        <form onSubmit={this.handleNoteDelete}>
          {this.props.noteList.map((note, i) => {
            return (
              <li key={i}>
                <p value={note.id}>{note.content}</p>
                <button type='submit' value={note.id}>Delete</button>
              </li>
            );
          })}
        </form>
      </div>
    );
  }
}

export default NoteItem;
