import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('props from LIST: ', props);
    console.log('this from LIST: ', this.props);
  }

  render(){
    return(
      <div>
        <h2> List of Notes </h2>
        <ul>
          {this.props.notes.map((note, i) => {
            return(
              <li key={i}>
                <p>Title: {note.title}</p>
                <p>Content: {note.content}</p>
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
