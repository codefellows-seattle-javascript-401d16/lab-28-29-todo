import React from 'react';
import {shallow} from 'enzyme';
import NoteItem from '../src/component/note-item';

describe('testing NoteItem', () => {
  test('onClick', () => {
    let wrapper = shallow(<NoteItem handleClick={() => {}} />);
    expect(wrapper.state.notes).toEqual([]);
  });
});
