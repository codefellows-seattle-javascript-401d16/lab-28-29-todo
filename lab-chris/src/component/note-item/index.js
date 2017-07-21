import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props.app.state.notes);
    console.log(this.props.note.id);
  }

  handleDelete() {
    this.props.app.setState(state => ({
      notes: state.notes.filter(note => note.id !== this.props.note.id),
    }));
  }

  render(){
    return(
      <p>
        {this.props.note.content}
        <button onClick={() => this.handleDelete(this.props.note)}> Delete </button>
      </p>
    );
  }
}

export default NoteItem;
