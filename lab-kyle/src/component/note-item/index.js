import React from 'react'

import NoteForm from '../note-form'

let renderIf = (test, component) => test ? component : undefined

class NoteItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {editing: false}
  }

  render() {
    return (
      <div className='note-item'>
        <p>{this.props.item.content}</p>
        {renderIf(this.state.editing === true, <NoteForm note={this.props.item} handleSubmit={this.props.noteUpdate} buttonText='Update' />)}
        {renderIf(this.state.editing === false, <button onClick={() => this.setState({editing: true})} > Edit </button>)}
        {renderIf(this.state.editing === true, <button onClick={() => this.setState({editing: false})} > Cancel </button>)}
        <button onClick={() => this.props.noteRemove(this.props.item)} > X </button>
      </div>
    )
  }
}

export default NoteItem
