import React from 'react';
import Modal from '../modal'
import NoteUpdateForm from '../note-update-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shown: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleModalDblClick = this.handleModalDblClick.bind(this);
    this.noteUpdate = this.noteUpdate.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log('target.parentElement', e.target.parentElement.getAttribute('value'));
    let result = this.props.app.state.notes.filter(note => note.id !== e.target.parentElement.getAttribute('value'));
    this.props.app.setState( prevState => ({
      notes: result})
    );
  }

  handleModalDblClick(e){
    e.preventDefault();
    this.setState(prevState => ({
        shown: !prevState.shown,
      })
    )
  }

  noteUpdate(update, updateId){
    console.log('update', update);
    console.log('updateId', updateId);
    update.id = updateId;
    console.log('updateId', updateId);
    let result = this.props.app.state.notes.map(note =>
      note.id === updateId ? update : note);
    this.props.app.setState( prevState => ({
      notes: result})
    );
  }

  render(){
    console.log('notes', this.props.notes);
    return (
      <ul>
        {this.props.notes.map((item, i) =>
          <li key={i} value={item.id} onDoubleClick={this.handleModalDblClick}>
            {item.content}
            <button type='button' onClick={this.handleClick}> - </button>
          {renderIf(this.state.shown,
            <NoteUpdateForm   handleNoteUpdate={this.noteUpdate} app={this.props.app}/>
          )}
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem;
