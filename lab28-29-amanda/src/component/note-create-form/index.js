import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
    }
  }

  handelChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handelNoteCreateForm(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='note'
          type='text'
          value={this.state.note}
          onChange={this.handel}
        />

        <button type= 'submit'> + </button>
      </form>
    )
  }
}

export default NoteCreateForm
