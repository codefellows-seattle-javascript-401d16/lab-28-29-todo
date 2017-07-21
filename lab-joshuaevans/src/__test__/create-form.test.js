import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form'

const note = {
  id: null,
  editing: null,
  content: null,
  completed: null,
}

describe('note create component', () => {
  test('should submit a new note', () => {
    const testCreate = jest.fn();
    shallow(<NoteCreateForm noteCreate={testCreate}/>)
      .find('.note-create')
      .simulate('click');
    expect(testCreate).toHaveBeenCalled();
  });
});
