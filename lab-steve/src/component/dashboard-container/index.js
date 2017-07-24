import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

// import Modal from '../modal';
import Navbar from '../navbar';
import NoteList from '../note-list';
import NoteForm from '../note-form';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: true,
    };
    this.noteCreate = this.noteCreate.bind(this);
    this.noteRemove = this.noteRemove.bind(this);
  }
  //methods
  noteCreate(note) {
    note.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.concat([note]),
    }));
  }
  noteRemove(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.filter((item) => {
        return item.id !== note.id;
      }),
    }));
  }
  render() {
    let {app} = this.props;

    return (
      <div className='dashboard-container'>
        <Navbar />
        <p> Total Count: {app.state.notes.length} </p>
        <NoteForm
          handleSubmit={this.noteCreate}
          submitContent='Add Note' />
        <NoteList
          noteRemove={this.noteRemove}
          notes={app.state.notes} />
      </div>
    );
  }
}
export default DashboardContainer;
