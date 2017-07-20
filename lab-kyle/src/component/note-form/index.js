import React from 'react'

class NoteForm extends React.Component {

  constructor (props) {
    super(props)

    let content = props.note ? props.note.content : ''
    let editing = props.note ? props.note.editing : false
    let completed = props.note ? props.note.completed : false
    this.state = {content, editing, completed}

    console.log('hit create form')
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div className='note-create-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button type='submit'>Add Note</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
