import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // let editing = props.note ? props.note.editing : false;
    // let completed = props.note ? props.note.completed : false;
    let content = props.note ? props.note.content : '';
    this.state = { content };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //hooks
  handleChange(e) {
    let {name, value, type} = e.target;
    if (type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // /*eslint-disable */
    this.props.handleSubmit(this.state);
    // /*eslint-enable */
  }
  render(){
    return (
      <form
        className='note-create-form'
        onSubmit={this.handleSubmit}>
        <label> Content:
          <input
            name='content'
            type='text'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'> {this.props.submitContent} </button>
      </form>
    );
  }
}
export default NoteForm;
