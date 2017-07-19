import React from 'react'

class NoteList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.notes);
    return (
      <ul>
        {this.props.notes.map((note, n) => {
          return (
            <li key={n}>
            {note.content}
            </li>
          )
        })}
        </ul>
    )
  }
}

export default NoteList
