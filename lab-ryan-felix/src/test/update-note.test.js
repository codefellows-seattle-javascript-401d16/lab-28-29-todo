import React from 'react';
import {shallow} from 'enzyme';
import UpdateNote from '../components/update-note';

describe('UpdateNote component', () => {
  test('should invoke its updateThisNote prop with an update', () => {
    const testUpdate = jest.fn();
    const wrapper = shallow(<UpdateNote content='foo' updateThisNote={testUpdate} closeEditor={jest.fn()} />);
    wrapper.find('input')
      .simulate('change', { target: { value: 'bar' } });
    wrapper.find('.submit')
      .simulate('click');
    expect(testUpdate).toHaveBeenCalledWith('bar');
  });
});
