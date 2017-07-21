import React from 'react'

import NoteForm from '../note-form'

let renderIf = (test, component) => test ? component : undefined

class NoteItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {edit: false}

    this.handleDblClick = this.handleDblClick.bind(this)
  }

  handleDblClick(e) {this.setState({edit: true})}

  render() {
    return (
      <div className='note-item'>
        <button onClick={() => this.props.noteRemove(this.props.item)} > X </button>
        <p onDoubleClick={this.handleDblClick}>{this.props.item.content}</p>
        {renderIf(this.state.edit === true, <NoteForm note={this.props.item} handleSubmit={this.props.noteUpdate} buttonText='Update' />)}
        {renderIf(this.state.edit === true, <button onClick={() => this.setState({edit: false})} > Cancel </button>)}
      </div>
    )
  }
}

export default NoteItem
