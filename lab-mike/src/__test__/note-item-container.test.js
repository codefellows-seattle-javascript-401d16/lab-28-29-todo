import React from 'react';
import {shallow, mount} from 'enzyme';
import NoteItemContainer from '../component/note-item-container';

let mockNote = {
  id: '123',
  inputText: '456',
};

describe('testing NoteItemContainer', () => {
  // test('testing delete button functionality', () => {
  //   let notePropArray = [{
  //     editing: false,
  //     content: 'first',
  //   }];
  //
  //   let wrapper = shallow(<NoteItemContainer notes={notePropArray} noteDelete={() => {}}/>);
  //   wrapper.find('button').simulate('click');
  //
  // });
});
