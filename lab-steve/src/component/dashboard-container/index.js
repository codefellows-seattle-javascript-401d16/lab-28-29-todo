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
    this.noteUpdate = this.noteUpdate.bind(this);
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
  noteUpdate(note) {
    let {app} = this.props;
    app.setState(prevState => ({
      notes: prevState.notes.map((item) => {
        return item.id == note.id ? note : item;
      }),
    }));
  }
  render() {
    let {app} = this.props;
    // let totalSpent = app.state.expenses.reduce((p, c) => {
    //   return p + c.price;
    // }, 0);
    // let remainingBudget = app.state.budget - totalSpent;

    return (
      <div className='dashboard-container'>
        <Navbar />
        <p> Total Count: {app.state.count} </p>
        {/*<p> Total Spent: {totalSpent}</p>
        <p> Remaining Budget: {remainingBudget}</p>*/}
        <NoteForm
          handleSubmit={this.noteCreate}
          submitContent='Add Note' />
        <NoteList
          noteRemove={this.noteRemove}
          noteUpdate={this.noteUpdate}
          notes={app.state.notes} />

        {/*renderIf(remainingBudget < 0 && this.state.showErrors,
          <Modal close={() => this.setState({showErrors: false})}>
            <p> You have no money! </p>
            <p> Current Balance: {remainingBudget} </p>
          </Modal>
        )*/}
      </div>
    );
  }
}
export default DashboardContainer;
