import React from 'react'
import './_note-create-form.scss'

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: '',
      editing: false,
      completed: false,
      content: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleNoteCreate(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          placeholder="type a note here"
          name='content'
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          />

        <p>Editing</p>
        <input
          name='editing'
          type='checkbox'
          value={this.state.editing}
          onChange={this.handleChange}
          />

        <p>Completed</p>
        <input
          name='completed'
          type='checkbox'
          value={this.state.completed}
          onChange={this.handleChange}
          />

        <button type='submit'> + </button>

      </form>
    );
  }
}

export default NoteCreateForm
