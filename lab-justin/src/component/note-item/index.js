import React from 'react';

import NoteCreateForm from '../note-create-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {edit: false};

    this.handleDblClick = this.handleDblClick.bind(this);
  }

  handleDblClick(e) {this.setState({edit: true})}

  render() {
    return (
      <div className='note-item'>
        
        <p onDoubleClick={this.handleDblClick}>{this.props.item.content}</p>
        <button onClick={() => this.props.noteRemove(this.props.item)} > delete </button>
        {renderIf(this.state.edit === true, <NoteCreateForm note={this.props.item} handleSubmit={this.props.noteUpdate} buttonText='Update' />)}
        {renderIf(this.state.edit === true, <button onClick={() => this.setState({edit: false})} > Cancel </button>)}
      </div>
    );
  }
}

export default NoteItem;