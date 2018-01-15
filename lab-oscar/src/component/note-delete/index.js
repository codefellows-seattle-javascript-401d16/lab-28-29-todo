import React from 'react';
import NoteCreateForm from '../note-create-form';



class NoteItemDelete extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      defaultView: true,
      activeClass: false,
    };
    this.itemDelete = this.itemDelete.bind(this);
    this.handleView = this.handleView.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  handleView() {
    this.setState({
      defaultView: false,
    });
  }

  toggleClass() {
    const currentState = this.state.activeClass;
    this.setState({activeClass: !currentState});
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


          <span onDoubleClick={this.handleView} >
            <span onClick={this.toggleClass} className={this.state.activeClass ? 'complete-checkbox': 'completed-checkbox'}>00</span>
            {this.props.noteItem.content.toUpperCase()}
            <img
              className="button-delete"
              src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-128.png'
              alt='delete'
              onClick={this.itemDelete}/>
              <img className="button-edit"
                src='https://cdn0.iconfinder.com/data/icons/hamburg/16/pencil.png'
                alt='Edit'
                onDoubleClick={this.handleView}/></span>

          :
          <span><NoteCreateForm
            updateClass='update-class'
            submitName='Update Note'
            note={this.props.noteItem}
            handleSubmit={(note) => { note.id = this.props.noteItem.id
              this.noteUpdate(note);}}/></span>
        }
      </div>
    );
  }
}

export default NoteItemDelete;
