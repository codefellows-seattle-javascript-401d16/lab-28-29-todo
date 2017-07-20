import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('Testing NoteCreateForm', () => {
  test('Default State', () => {
    let wrapper = shallow(<NoteCreateForm />);
    expect(wrapper.state('content')).toBe('');
  });

  test('Submit Handler', () => {
    let testSubmit = () => {
      expect(note.id).toExist();
      expect(note.editing).toBe(false);
      expect(note.completed).toBe(true);
      expect(note.content).toBe('');
    };

    let wrapper = shallow((<NoteCreateForm getApp={testSubmit}/>));
    wrapper.find('form').find('button').simulate('submit');
  });
});
