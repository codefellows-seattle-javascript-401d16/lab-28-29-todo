import React from 'react';

class NoteItemDelete extends React.Component {
  constructor(props){
    super(props);
    this.itemDelete = this.itemDelete.bind(this);
  }

  itemDelete(e){
    console.log('targe', this.props.noteItem);
    console.log('state', this.props.notes.state);
    let notes = this.props.notes.state.notes;
    let newNotes = notes.filter((element) => {
      return (element.id != this.props.noteItem.id)
    })
    this.props.notes.setState({notes: [...newNotes]});
  }

  render() {
    console.log('this new item', this.props.noteItem);
    return (
      <div>
        {this.props.noteItem.content}
        <button onClick={this.itemDelete} type="button">delete</button>
      </div>
    );
  }
}

export default NoteItemDelete;
