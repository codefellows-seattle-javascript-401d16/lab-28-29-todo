import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing noteCreateForm', () => {
  test('it should have correct default state values', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => {}} />);
    expect(wrapper.state('content')).toBe('');
  });
  test('expect submit to invoke handleNoteCreate', () => {
    let noteCreate = (note) => {
      expect(note.title).toEqual('');
    };
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={noteCreate} />);
    wrapper.find('form').simulate('click');
  });
  test('testing onChange handler', () => {
    const component = shallow(<NoteCreateForm handleNoteCreate={() => {}} />);
    component.find('input').simulate('change', {target: { value: 'abc'}});
    expect(component).toMatchSnapshot();
  });
});
