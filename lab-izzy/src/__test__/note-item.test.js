// Test the NoteItem's functionality defined to remove a note from the App's state

import React from 'react';
import { shallow } from 'enzyme';
import NoteItem from '../component/note-item';

const note = {
  id: null,
  editing: null,
  content: null,
  completed: null,
};

describe('testing remove note', () => {
  test('should remove note from state', () => {
    let removeNote = jest.fn();
    let deleteNote = () => {
      expect(removeNote).toHaveBeenCalled();
    };
    
    let wrapper = shallow(<NoteItem note={note} removeNote={removeNote} handleClick={deleteNote} />);
    wrapper.find('button').simulate('click');
  });
});
