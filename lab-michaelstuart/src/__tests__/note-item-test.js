import React from 'react';
import { shallow } from 'enzyme';
import { NoteItem } from '../main.js';

const note = {
  id: null,
  editing: null,
  content: null,
  completed: null,
}

describe('testing delete note', () => {
  test('should remove note from state', () => {
    const removeNote = jest.fn();
    const deleteNote = () => expect(removeNote).toHaveBeenCalled();
    const wrapper = shallow(<NoteItem note={note} removeNote={removeNote} handleClick={deleteNote} />);
    wrapper.find('button').simulate('click');
  })
})
