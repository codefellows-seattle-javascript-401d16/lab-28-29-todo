import React from 'react';
import {shallow} from 'enzyme';
import NoteItemContainer from '../component/note-item-container';

describe('testing NoteItemContainer', () => {
  test('testing delete button functionality', () => {
    let mockNote = {
      content: 'potato'
    }
    let wrapper = shallow(<NoteItemContainer noteDelete={mockNote}/>)
    wrapper.find('button').simulate('click');

  })
})
