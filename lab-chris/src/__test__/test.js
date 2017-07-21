import React from 'react';
import {shallow} from 'enzyme';
import NoteCreate from '../component/note-create-form/';
import NoteItem from '../component/note-item/';

describe('test', () => {
  test('should pass', () => {
    expect(true).toBe(true);
  });
});

describe('Note Create form', () => {
  test('onChange handler', () => {
    let wrapper = shallow(<NoteCreate handleChange={() => {}} />);
    expect(wrapper.state('content')).toBe('');
    wrapper.setState({ content: 'foo' });
    expect(wrapper.state('content')).toBe('foo');
  });

  test('onSubmit handler', () => {
    let wrapper = shallow(<NoteCreate handleSubmit={() => {}} />);
    expect(wrapper.state('content')).toBe('');
  });
});

// describe('Note Item', () => {
//   test('remove note from state', () => {
//     let wrapper = shallow(<NoteItem handleDelete={() => {}} />);
//   });
// });
