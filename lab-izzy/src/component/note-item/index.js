import React from 'react';
import './_note-item.scss';
import NoteForm from '../note-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {note} = this.props;
    return (
      <li onDoubleClick={() => this.props.noteUpdate({editing: true})}>

        {renderIf(!note.editing,
          <div>
            <button onClick={() => this.props.noteRemove(note)}>
              delete
            </button>

            <p> <strong>To Do: </strong> {note.content} </p>

          </div>)}

        {renderIf(note.editing,

          <NoteForm
            note={note}
            buttonName='update note'
            handleSubmit={(data) => {
              data.id = note.id;
              this.props.noteUpdate(data);

            }}/>)}
      </li>
    );
  }
}

export default NoteItem;
