import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {

  describe('testing onChange', () => {
    test('should have correct default state', () => {
      let wrapper = shallow(<NoteCreateForm handleChange={() => {}} />);
      expect(wrapper.state('content')).toEqual('');
      expect(wrapper.state('completed')).toEqual(false);
      expect(wrapper.state('editing')).toEqual(false);
    });
  });

  describe('NoteCreateForm onSubmit', () => {
    test('should have correct default state', () => {
      let noteCreate = (note) => {
        expect(note.state('content')).toEqual('');
        expect(note.state('completed')).toEqual(false);
        expect(note.state('editing')).toEqual(false);
      };
    });
  });
});
