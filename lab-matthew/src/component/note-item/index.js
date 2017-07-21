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
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleView(e){
    this.setState(state => ({
      defaultView: false,
      editView: true,
    }));
    console.log('defaultView', this.state.defaultView);
  }

  // handleChange(e){
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.handleSubmit(this.state);
  //   this.setState(state => ({
  //     title: '',
  //     content: '',
  //   }));
  // }


  render() {
    return (
      this.state.defaultView === true ?
        <p>
        <span onDoubleClick = {this.handleView}>
          {this.props.currentNote.title}
          {this.props.currentNote.content}
        </span>
        <button onClick = {() => this.props.noteRemove(this.props.currentNote)}>
        -
        </button>
        </p>
      :


      <NoteCreateForm
        handleSubmit = {this.props.handleSubmit}/>




    );
  }
}

export default NoteItem;
