import React from 'react';

import NoteCreateForm from '../note-create-form';
import NoteListContainer from '../note-list-container';

class DashboardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };

    console.log('hit Dashboard');
    this.getContent = this.getContent.bind(this);
  }

  getContent(words) {
    console.log('words', words);
    this.props.app.setState({content: words});
  }

  render() {
    return (
      <div className='dashboard-container'>
        <NoteCreateForm app={this.props.app} getContent={this.getContent} />
        <NoteListContainer app={this.props.app} content={this.state.content}/>
      </div>
    );
  }
}

export default DashboardContainer;
