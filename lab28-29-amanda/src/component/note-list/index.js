import React from 'react'
import ReactDom from 'react-dom'
import NoteItem from '../note-item'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <ul> {this.props.notes.map((item, i) => {
        console.log(item)
        return(
          <li key={i}>
            <NoteItem note={item}/>
          </li>
        )
      })}
      </ul>
    )
  }
}

export default NoteList
