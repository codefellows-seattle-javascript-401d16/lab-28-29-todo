import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import Modal from '../modal';
import Navbar from '../navbar';
import ExpenseList from '../expense-list';
import ExpenseForm from '../expense-form';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showErrors: true,
    };
    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
    this.expenseUpdate = this.expenseUpdate.bind(this);
  }
  //methods
  expenseCreate(expense) {
    expense.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense]),
    }));
  }
  expenseRemove(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.filter((item) => {
        return item.id !== expense.id;
      }),
    }));
  }
  expenseUpdate(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.map((item) => {
        return item.id == expense.id ? expense : item;
      }),
    }));
  }
  render() {
    let {app} = this.props;
    let totalSpent = app.state.expenses.reduce((p, c) => {
      return p + c.price;
    }, 0);
    let remainingBudget = app.state.total - totalSpent;

    return (
      <div className='dashboard-container'>
        <Navbar />
        <p> Total Budget: {app.state.total} </p>
        <p> Total Spent: {totalSpent}</p>
        <p> Remaining Budget: {remainingBudget}</p>
        <ExpenseForm
          handleSubmit={this.expenseCreate}
          submitTitle='Add Expense' />
        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={app.state.expenses} />

        {renderIf(remainingBudget < 0 && this.state.showErrors,
          <Modal close={() => this.setState({showErrors: false})}>
            <p> You have no money! </p>
            <p> Current Balance: {remainingBudget} </p>
          </Modal>
        )}
      </div>
    );
  }
}
export default DashboardContainer;
