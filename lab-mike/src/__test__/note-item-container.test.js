import React from 'react';
import {shallow} from 'enzyme';
import NoteItemContainer from '../component/note-item-container';

describe('testing NoteItemContainer', () => {
  test('testing delete button functionality', () => {
    let notePropArray = [{
      editing: false,
      completed: false,
      content: 'first',
    }];

    let wrapper = shallow(<NoteItemContainer notes={notePropArray} noteDelete={() => {}}/>);
    wrapper.find('button').simulate('click');

  });
});
