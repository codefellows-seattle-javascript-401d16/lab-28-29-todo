import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => {}} />)
    expect(wrapper.state('inputText')).toBe('');
  });
});
