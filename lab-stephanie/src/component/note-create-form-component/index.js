import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.noteCreate(Object.assign({}, this.state))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="content" type="text" onChange={this.handleChange} />
        <button type="submit"> + </button>
      </form>
    )
  }
}

export default NoteCreateForm
