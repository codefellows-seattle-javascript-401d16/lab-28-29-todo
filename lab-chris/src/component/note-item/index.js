import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    console.log('note items', this.props.notes);
  }

  handleDelete(e){
    this.props.setState(prev => ({
      notes: prev.notes.filter((item) => {
        return item.id !== note.id
      }),
    }));
  }

  render(){
    return(
      <p>
        {this.props.notes.content}
        <button onClick={() => this.props.handleDelete(this.props.note)}> Delete </button>
      </p>
    );
  }
}

export default NoteItem;
