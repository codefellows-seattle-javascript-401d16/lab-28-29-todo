// Test your onSubmit handler
// Test your onChange handler

import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

const event = {
  preventDefault: () => null,
  target: {
    value: true,
  },
};

describe('testing NoteCreateForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<NoteCreateForm addNote={() => {}} />);
    expect(wrapper.state('content')).toBe('');
  });

  test('expect submit to invoke addNote', () => {
    let newNote = (note) => {
      expect(note.content).toEqual('izzy loves food');
    };

    let wrapper = shallow(<NoteCreateForm addNote={() => {}} handleSubmit={newNote} />);
    wrapper.state = {content: 'izzy loves food'};
    wrapper.find('form').simulate('submit', event);
  });

  test('expect onChange to change the state', () => {
    let changedState = () => {
      expect(wrapper.state).toExist();
    };

    let wrapper = shallow(<NoteCreateForm handleChange={changedState} setState={() => this.state = true} />);
    wrapper.find('.input-change').simulate('change', event);
  });
});
