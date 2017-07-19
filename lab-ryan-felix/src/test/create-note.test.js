import React from 'react';
import {shallow} from 'enzyme';
import CreateNote from '../components/create-note';

describe('CreateNote component', () => {
  test('should update its state in response to a change in the text input', () => {
    const wrapper = shallow(<CreateNote addNote={() => {}}/>);
    wrapper.find('input').simulate('change', { target: { value: 'foo' }, preventDefault: jest.fn() });
    expect(wrapper.state('inputText')).toEqual('foo');
    expect(wrapper.state('invalidInput')).toEqual(false);
  });

  test('should call its addNote prop when a valid note is submitted', () => {
    const addNote = (content) => {
      expect(content).toEqual('foo');
    };
    const wrapper = shallow(<CreateNote addNote={addNote}/>);
    wrapper.setState({ inputText: 'foo', invalidInput: 'false '}).simulate('submit', { preventDefault: jest.fn() });
  });
});
