// Test your onSubmit handler
// Test your onChange handler

import React from 'react';
import {shallow} from 'enzyme';
import NoteForm from '../component/note-form';

const event = {
  preventDefault: () => null,
  target: {
    value: true,
  },
};

describe('testing NoteForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<NoteForm noteAdd={() => {}} />);
    expect(wrapper.state('content')).toBe('');
  });

  test('expect submit to invoke noteAdd', () => {
    let newNote = (note) => {
      expect(note.content).toEqual('izzy loves food');
    };

    let wrapper = shallow(<NoteForm noteAdd={() => {}} handleSubmit={newNote} />);
    wrapper.state = {content: 'izzy loves food'};
    wrapper.find('form').simulate('submit', event);
  });

  test('expect onChange to change the state', () => {
    let changedState = () => {
      expect(wrapper.state).toExist();
    };

    let wrapper = shallow(<NoteForm handleChange={changedState} setState={() => this.state = true} />);
    wrapper.find('.note-form').simulate('change', event);
  });
});
