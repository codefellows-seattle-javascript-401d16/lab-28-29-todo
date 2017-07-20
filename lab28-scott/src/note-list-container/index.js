import React from 'react';

class NoteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
    console.log('props from LIST: ', props);
    console.log('this from LIST: ', this);
  }

  render(){
    console.log('LIST this.props.noteList: ', this.props.noteList);
    return(
      <div>
        <h2> List of Notes </h2>
        <ul>
          {this.props.noteList.map((note, i) => {
            return(
              <li key={i}>
                <p>Title: {note.title}</p>
                <p>Content: {note.content}</p>
                <p>Editing: {note.editing ? 'True' : 'False'}</p>
                <p>Completed: {note.completed ? 'True' : 'False'}</p>
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
