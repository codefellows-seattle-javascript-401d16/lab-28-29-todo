import React from 'react'
import uuid from 'uuid/v1';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: uuid(),
      editing: false,
      completed: false,
      content: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
      editing: true,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleNoteCreate(this.state)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='content'
          type='text'
          onChange={this.handleChange}
          value={this.state.content}
          />
        <button type='submit'>NOTE ME</button>
      </form>
    )
  }
}

export default NoteCreateForm
