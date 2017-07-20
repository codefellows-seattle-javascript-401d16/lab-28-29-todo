import React from 'react'

class NoteCreateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
    }
    this.handelChange=this.handelChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handelChange(e){
    this.setState({
      title: e.target.value,
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.noteCreate(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='note'
          type='text'
          value={this.state.title}
          onChange={this.handelChange}
        />
        <button type= 'submit'> + </button>
      </form>
    )
  }
}

export default NoteCreateForm
