import React from 'react';
import NoteForm from '../note-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItemContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  render () {
    return (
      <li onDoubleClick={() => this.setState((state) => ({editing: !state.editing}))}>
        {renderIf(!this.state.editing,
          <div>
            <p>{this.props.note.inputText}</p>
            <button onClick={() => this.props.noteDelete(this.props.note)}>Delete</button>
          </div>
        )}
        {renderIf(this.state.editing,
          <NoteForm
            note={this.props.note}
            submitTitle='Edit Note'
            handleSubmit={(data) => {
              data.id = this.props.note.id;
              this.props.noteUpdate(data);
            }}
          />
        )}
      </li>
    );
  }
}

export default NoteItemContainer;
