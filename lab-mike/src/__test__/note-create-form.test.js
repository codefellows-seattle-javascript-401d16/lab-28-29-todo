import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => {}} />)
    expect(wrapper.state('inputText')).toBe('');
  });
  test('expect submit to invoke handleNoteCreate', () => {
    let noteCreate = (note) => {
      expect(note.inputText).toEqual('');
    }
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={noteCreate} />)
    wrapper.find('button').simulate('click');
  });
  test('testing inputText change onChange handler', () => {
    let noteCreate = (note) => {
      expect(note.inputText).toEqual('1234');
    }
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={noteCreate} />)
    wrapper.find('input').simulate('change', {target: {name: 'inputText', value: '123'}});
  });
});
