import React from 'react'
import './_note-item.scss'
class NoteItem extends React.Component {

  handleDelete(e) {
    e.preventDefault()
    let arr = this.props.notes
    arr.splice(e.target.parentElement.value, 1)
    this.props.app.setState(state => ({
      notes: arr
    }))
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    }
  render() {
    return (
      <ul className="note-item">
        {this.props.notes.map((item, i) =>
          <li key={i} value={i}>
            {item.content}
          <button onClick={this.handleDelete.bind(this)}>delete</button>
          </li>
        )}
      </ul>
    );
  }
}

export default NoteItem
