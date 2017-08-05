import React from 'react';
import {shallow, mount} from 'enzyme';
import NoteItemContainer from '../component/note-item-container';

let mockNote = {
  id: '123',
  inputText: '456',
};

describe('testing NoteItemContainer', () => {
  test('initial state', () => {
    let wrapper = mount(<NoteItemContainer note={mockNote} />);
    expect(wrapper.state('editing')).toEqual(false);
  });
  test('testing delete button functionality', () => {
    let mockDeleteNote = jest.fn();
    let wrapper = mount(<NoteItemContainer note={mockNote} noteDelete={mockDeleteNote} />);
    wrapper.find('button').simulate('click');
    expect(mockDeleteNote).toHaveBeenCalledWith(mockNote);
  });
});
