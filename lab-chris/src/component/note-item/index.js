import './note-item.scss';
import NoteUpdate from '../note-update/';

import React from 'react';


let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      id: '',
    };
    console.log('item props', this.props.app);
    console.log(this.state.editing);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }


  handleUpdate(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }

  handleDelete(note){
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id ;
      }),
    }));
  }

  render() {
    return (
      <ul className="note-item">
        {this.props.app.state.notes.map((item, i) =>
          <li key={i}
            onDoubleClick={() =>
              this.setState(state => ({
                editing: !state.editing,
                id: item.id,
              }))}
            value={i}
          >
            <div>
              {item.content}
              <button onClick={() => this.handleDelete(item)}>delete</button>
            </div>
            {renderIf(this.state.editing && item.id === this.state.id,
              <div onDoubleClick={() => this.setState(state => ({editing: state.editing}))}>
                <NoteUpdate
                  handleNoteUpdate={this.handleUpdate}
                  noteID={item.id}
                  renderIf={this.renderIf}
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
