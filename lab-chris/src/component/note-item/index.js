import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleView(){
    console.log('edit');
    this.props.app.setState(state => ({
      notes: state.notes.map(note => note.id == this.props.note.id ? this.props.note : note),
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
        <button onClick={this.handleView}>Update</button>
      </section>
    );
  }
}

export default NoteItem;
