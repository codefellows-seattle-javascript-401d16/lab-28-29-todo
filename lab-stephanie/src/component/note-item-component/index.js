import React from 'react'
let update = false

let renderIf = (t, c) => (t ? c : undefined)

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
      editing: false,
    })
  }

  handleDelete() {
    this.props.noteDelete(this.props.note.id)
  }
  handleUpdate() {
    this.setState(state => ({ editing: !state.editing }))
  }

  render() {
    return (
      <div onDoubleClick={this.handleUpdate}>
        {renderIf(
          this.state.editing,
          <div>
            <input
              name="update"
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </div>
        )}

        {renderIf(
          !this.state.editing,
          <div>
            {this.props.note.content}
            <button onClick={this.handleDelete}>x</button>
          </div>
        )}
      </div>
    )
  }
}

export default NoteItem
