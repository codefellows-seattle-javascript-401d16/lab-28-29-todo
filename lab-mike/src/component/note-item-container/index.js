import React from 'react';
import NoteCreateForm from '../note-create-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItemContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
    };
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.notes.map((item, i) =>
            <li key={i} onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}>
              {renderIf(!this.state.editing,
                <div>
                  <p>{item.content}</p>
                  <button onClick={() => this.props.noteDelete(item)}>Delete</button>
                </div>
              )}
              {renderIf(this.state.editing,
                <NoteCreateForm noteUpdate={this.props.noteUpdate} notes={this.props.notes}/>
              )}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteItemContainer;
