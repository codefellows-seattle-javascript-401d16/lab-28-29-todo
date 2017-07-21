import React from 'react';
import NoteCreateForm from '../note-create-form';

class NoteItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      defaultView: true,
      editView: false,
    };

    this.handleView = this.handleView.bind(this);
  }

  handleView(e){
    this.state.defaultView === true ?
    this.setState(state => ({
      defaultView: false,
      editView: true,
    }))
    :
    this.setState(state => ({
      defaultView: true,
      editView: false,
    }));
  }


  render() {
    return (
      this.state.defaultView === true ?
        <p>
          <span onDoubleClick = {this.handleView}>
            {this.props.currentNote.title}
            <br></br>
            {this.props.currentNote.content}
            </span>
            <button onClick = {() => this.props.noteRemove(this.props.currentNote)}>
            -
            </button>
        </p>

      :

      <span onDoubleClick = {this.handleView}>
        {this.props.currentNote.title}
        <br></br>
        {this.props.currentNote.content}
        <button onClick = {() => this.props.noteRemove(this.props.currentNote)}>
        -
        </button>
        <NoteCreateForm
          handleSubmit = {this.props.handleSubmit}
        />
      </span>

    );
  }
}

export default NoteItem;
