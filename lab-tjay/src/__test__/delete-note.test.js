import React from 'react';
import { shallow } from 'enzyme';
import NoteItem from '../component/note-item';

const note = {
  id: null,
  editing: null,
  content: 'content',
  completed: null,
}

describe('Note component', () => {
  test('should delete note', () => {
    const testRemove = jest.fn();
    shallow(<NoteItem content='content' note={note} noteRemove={testRemove}/>)
      .find('.delete-note')
      .simulate('click');
    expect(testRemove).toHaveBeenCalled();
  });
});
