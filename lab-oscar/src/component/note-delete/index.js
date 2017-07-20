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
    return (
      <div>
        {this.props.noteItem.content.toUpperCase()}
        <img
          src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-128.png'
          alt='delete'
          onClick={this.itemDelete}/>
      </div>
    );
  }
}

export default NoteItemDelete;
