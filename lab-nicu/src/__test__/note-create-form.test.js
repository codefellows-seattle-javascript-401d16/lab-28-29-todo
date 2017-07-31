
import React from 'react';
import { shallow } from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {
  test('should have correct defalt state', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => { }} />);
    expect(wrapper.state('content')).toBe('');
    expect(wrapper.state('editing')).toBe(false);
    expect(wrapper.state('isCompleted')).toBe(false);
  });

  test('expect change to invoke handleCreateFormChange', () => {
    const event = {target: {name: 'pollName', value: 'Eat'}};
    let handleCreateFormChange = (note) => {
      expect(note.value).toEqual('Eat');
    };
    let wrapper = shallow(<NoteCreateForm onChange={handleCreateFormChange} />);
    wrapper.find('form').simulate('change', event);
  });


});