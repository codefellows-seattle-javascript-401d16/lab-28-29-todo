import React from 'react';
import NoteCreateForm from './note-create-form';
import NoteList from './note-list';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    const editing = !this.state.editing;
    this.setState({ editing })
  }

  render() {
    return (
      <div>
        {!this.state.editing && <NoteCreateForm addNote={this.props.addNote} />}
        <NoteList
          notes={this.props.notes}
          editing={this.state.editing}
          removeNote={this.props.removeNote}
          updateNote={this.props.updateNote}
          toggleMode={this.toggleMode}/>
      </div>
    )
  }
}
