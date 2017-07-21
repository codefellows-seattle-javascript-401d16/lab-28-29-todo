import React from 'react'
let update = false

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.note.content,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    })
    this.props.note.content = this.state.content
  }
  handleBlur(e) {
    this.setState({
      content: e.target.value,
    })
    update = false
  }

  handleDelete() {
    this.props.noteDelete(this.props.note.id)
  }
  handleUpdate() {
    update = true
  }

  render() {
    return (
      <div onClick={this.handleUpdate}>
        {update
          ? <div>
            <input
              name="update"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </div>
          : <div>
            {this.props.note.content}
            <button onClick={this.handleDelete}>x</button>
          </div>}
      </div>
    )
  }
}

export default NoteItem
