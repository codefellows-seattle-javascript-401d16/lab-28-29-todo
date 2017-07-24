import React from 'react';
import './_note-item.scss';
import NoteUpdateForm from '../note-update-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      id: '',
    };
  }

  render() {
    return (
      <ul className="note-item">
        {this.props.notes.map((item, i) =>
          <li
            onDoubleClick={() =>
              this.setState(state => ({
                editing: !state.editing,
                id: item.id,
              }))}
            key={i}
            value={i}
          >
            <div>
              <p>{item.content}</p>
            </div>
            <button onClick={() => this.props.noteRemove(item)}>delete</button>
            {renderIf(this.state.editing && item.id === this.state.id,
              <div className="note-update" onDoubleClick={() => this.setState(state => ({editing: state.editing}))}>
                <NoteUpdateForm
                  app={this.props.app}
                  submitTitle='update'
                  handleNoteUpdate={this.props.handleNoteUpdate}
                  noteID={item.id}
                  renderIf={this.props.renderIf}
                  handleDoubleClick={this.handleDoubleClick}
                />
              </div>
            )}
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
