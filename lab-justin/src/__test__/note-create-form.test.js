import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {

  describe('NoteCreateForm onChange', () => {
    test('should have correct default state', () => {
      let wrapper = shallow(<NoteCreateForm handleChange={() => {}} />);
      expect(wrapper.state('content')).toBe('');
    });
  });

  describe('NoteCreateForm onSubmit', () => {
    test('should have correct default state', () => {
      let wrapper = shallow(<NoteCreateForm handleSubmit={() => {}} />);
      expect(wrapper.state('content')).toBe('');
    });
  });
});