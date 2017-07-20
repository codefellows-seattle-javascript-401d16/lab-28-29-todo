import React from 'react';
import { shallow } from 'enzyme';
import { NoteCreateForm } from '../main.js';

const event = {
  preventDefault: () => null,
  target: {
    value: true,
  },
}

describe('testing create note', () => {
  test('should have correct default state', () => {
    const wrapper = shallow(<NoteCreateForm addNote={() => {}} />);
    expect(wrapper.state('content')).toBe('');
  })

  test('expect submit to invoke createNote', () => {
    const createNote = (note) => {
      expect(note.content).toEqual('test string');
    }

    const wrapper = shallow(<NoteCreateForm addNote={() => {}} handleSubmit={createNote} />);
    wrapper.state = { content: 'test string' };
    wrapper.find('form').simulate('submit', event);
  })

  test('expect onChange method to update the state', () => {
    const changeState = () => {
      expect(wrapper.state).toExist();
    }

    const wrapper = shallow(<NoteCreateForm setState={() => this.state = true} handleChange={changeState} />);
    wrapper.find('.input').simulate('change', event);
  })
})
