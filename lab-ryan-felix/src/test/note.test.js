import React from 'react';
import {shallow} from 'enzyme';
import Note from '../components/note-list/note';

describe('Note component', () => {
  test('should invoke its delete prop when delete button is clicked', () => {
    const testRemove = jest.fn();
    shallow(<Note content='foo' removeThisNote={testRemove} editThisNote={jest.fn()}/>)
      .find('.delete-note')
      .simulate('click');
    expect(testRemove).toHaveBeenCalled();
  });
});
