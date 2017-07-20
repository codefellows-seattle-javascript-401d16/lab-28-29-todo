import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../src/component/note-create-form';

describe('testing NoteCreateForm', () => {
  test('onChangeHandler', () => {
    let wrapper = shallow(<NoteCreateForm handleChange={() => {}} />);
    expect(wrapper.state('editing')).toEqual(false);
    expect(wrapper.state('completed')).toEqual(false);
    expect(wrapper.state('content')).toEqual('');
  });

  test('onSubmitHandler', () => {
    let noteCreate = (note) => {
      expect(note.editing).toEqual(false);
      expect(note.completed).toEqual(false);
      expect(note.content).toEqual('');
    };
  });
});
