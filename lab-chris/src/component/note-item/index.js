import './note-item.scss';

import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(){
    console.log('edit');
    this.props.app.setState(item => ({
      notes: item.notes.map(note => note.id == this.props.note.id ? this.props.note : note),
    }));
  }

  handleDelete() {
    this.props.app.setState(state => ({
      notes: state.notes.filter(note => note.id !== this.props.note.id),
    }));
  }

  render(){
    return(
      <section>
        <p>
          {this.props.note.content}
          <button onClick={this.handleDelete}> Delete </button>
        </p>
        <button onClick={this.handleUpdate}>Update</button>
      </section>
    );
  }
}

export default NoteItem;
