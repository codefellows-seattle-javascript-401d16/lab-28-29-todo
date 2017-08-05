import React from 'react';
import {shallow, mount} from 'enzyme';
import NoteForm from '../component/note-form';

describe('testing NoteForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<NoteForm handleSubmit={() => {}} />);
    expect(wrapper.state('inputText')).toBe('');
  });
  test('note form with props', () => {
    let mockNote = {
      inputText: 'potato',
    };
    let wrapper = shallow(<NoteForm note={mockNote} />);
    expect(wrapper.state()).toEqual(mockNote);
    wrapper.find('button').simulate('click');
  });
  test('testing inputText change onChange handler', () => {
    let wrapper = shallow(<NoteForm handleSubmit={() => {}} />);
    wrapper.find('input').simulate('change', {target: {value: '123'}});
    expect(wrapper).toMatchSnapshot();
  });
  test('additional input change to change state', () => {
    let wrapper = mount(<NoteForm />);
    wrapper.find('input[name="inputText"]').simulate('change', {
      target: {
        name: 'inputText',
        value: '456',
      },
    });
    expect(wrapper.state('inputText')).toEqual('456');
  });
});
