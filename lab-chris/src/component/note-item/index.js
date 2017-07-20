import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){

  }

  render(){
    return(
      <ul>
        {this.props.app.notes.map((note) =>
          <li key={note.id}>
            console.log(note);
            {note.content}
            <button onClick={this.handleDelete}> Delete </button>
          </li>
        )}
      </ul>    );
  }
}

export default NoteItem;
