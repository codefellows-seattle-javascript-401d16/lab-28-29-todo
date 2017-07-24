import './_note-create-form.scss';
import React from 'react';


class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      editing: false,
      completed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteCreate(this.state);
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <label className="form-label"> To Do </label>
        <input className="form-input"
          type='text'
          value={this.state.content}
          onChange={this.handleChange}
          placeholder = 'Enter your To Do'
        />
        <button className="form-button" type='submit'> submit </button>
      </form>
    );
  }
}

export default NoteCreateForm;
