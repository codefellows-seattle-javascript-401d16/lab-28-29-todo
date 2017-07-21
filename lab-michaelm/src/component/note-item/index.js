import React from 'react';
import './_note-item.scss';
import NoteUpdateForm from '../note-update-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
    };
  }

  render() {
    return (
      <ul className="note-item">
        {this.props.notes.map((item, i) =>
          <li
            onDoubleClick={() => this.setState(state => ({editing: !state.editing}))}
            key={i}
            value={i}
          >
            {renderIf(!this.state.editing,
              <div>
                {item.content}
                <button onClick={() => this.props.noteRemove(item)}>delete</button>
              </div>
            )}
            {renderIf(this.state.editing,
              <div onDoubleClick={() => this.setState(state => ({editing: state.editing}))}>
                {item.content}
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
