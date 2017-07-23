import './_note-item.scss';
import React from 'react';
import NoteForm from '../note-form';

let renderIf = (test, component) => test ? component : undefined;

class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {edit: false};

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleDoubleClick(e) {this.setState({edit: true});}

  render() {
    return (
      <div className='note-item'>
        <div className="button-delete-div">
          <button className="button-delete" onClick={() => this.props.noteRemove(this.props.item)} > delete </button>
        </div>

        <p onDoubleClick={this.handleDoubleClick}>{this.props.item.content}</p>

        {renderIf(this.state.edit === true,
          <NoteForm note={this.props.item} handleSubmit={this.props.noteUpdate} buttonText='update' />)}

        {renderIf(this.state.edit === true,
          <button className="button-cancel" onClick={() => this.setState({edit: false})}> cancel </button>)}

      </div>
    );
  }
}

export default NoteItem;
