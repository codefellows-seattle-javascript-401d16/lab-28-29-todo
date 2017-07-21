import React from 'react';
import NoteCreateForm from '../note-create-form';



class NoteItemDelete extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      defaultView: true,
    };
    this.itemDelete = this.itemDelete.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleView() {
    this.setState({
      defaultView: false,
    });
  }
  itemDelete(e){
    let notes = this.props.notes.state.notes;
    let newNotes = notes.filter((element) => {
      return (element.id != this.props.noteItem.id)
    })
    this.props.notes.setState({notes: [...newNotes]});
  }

  noteUpdate(note){
    this.setState({
      defaultView: true,
    });
    this.props.notes.setState(prevNotes => ({
      notes: prevNotes.notes.map((item) => {
        return item.id === note.id ? note : item;
      }),
    }));
  }

  render() {
    return (
      <div>

        {this.state.defaultView == true ?
          <span>
            <div onClick={this.handleView} >
              {this.props.noteItem.content}
            </div>
            <img
              src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-128.png'
              alt='delete'
              onClick={this.itemDelete}/></span>

          :
          <span><NoteCreateForm
            note={this.props.noteItem}
            handleSubmit={(note) => { note.id = this.props.noteItem.id
              this.noteUpdate(note)}}/></span>
        }
      </div>
    );
  }
}

export default NoteItemDelete;
