import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

const note = {
  id: null,
  editing: null,
  content: 'pickles',
  title: null,
  completed: null,
};

describe('testing create a note', () => {
  test('should make a new note', () => {
    const testCreate = jest.fn();

    shallow(<NoteCreateForm content='pickles' noteCreate={testCreate}/>)
      .find('note-create')
      .simulate('click');
    expect(testCreate).toHaveBeenCalled();
  });
});
