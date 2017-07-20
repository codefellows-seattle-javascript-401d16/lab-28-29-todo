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
        <h1> List of Notes </h1>
        <ul>
          {this.props.noteList.map((note, i) => {
            return(
              <li key={i}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
