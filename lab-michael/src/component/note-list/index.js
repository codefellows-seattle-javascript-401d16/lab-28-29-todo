import React from 'react'



import NoteAddForm from '../note-add-form'

class NoteListForm extends React.Component {

  render(){
    {console.log('this.props',this.props)}
    return(
      <div>
        <ul>
        {this.props.notes.map((item,i)=>
          <li key={i}>
            <p> {item.subject} </p>
            <p> {item.textContent} </p>
            <button onClick={() => this.props.handleNoteRemove(item)}>
            Delete
            </button>

            <NoteAddForm
              note={item}
              submitTitle='update note'
              handleNoteAdd={(note)=> {
                note.id = item.id
                this.props.handleNoteUpdate(note)
            }} />
          </li>
        )}
        </ul>
      </div>
    )
  }
}

// {/*submitTitle='update'
// {/*handleAdd={note => note.id=note.id
// this.props.handleNoteUpdate(note)
// }*/}
export default NoteListForm
