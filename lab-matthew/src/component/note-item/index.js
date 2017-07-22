import './_note-item.scss';

import React from 'react';
import NoteCreateForm from '../note-create-form';

let renderIf = (t, c) => t ? c : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };

  }

  render() {
    let {note} = this.props;
    return (

      <li className="note-item" onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>

            <div className='note-title'>
              <p> {note.title} </p>
            </div>

            <p> {note.content} </p>
            <button onClick = {() => this.props.noteRemove(note)}>
            -
            </button>
            
          </div>
        )}

        {renderIf(this.state.editing,
          <NoteCreateForm
            buttonName='update note'
            note={note}
            editing={this.state.editing}
            handleSubmit={(data) => {
              data.id = note.id;
              this.props.noteUpdate(data);
              this.setState({
                editing: false,
              });
            }}
            />
          )}
      </li>

    );
  }
}

export default NoteItem;
