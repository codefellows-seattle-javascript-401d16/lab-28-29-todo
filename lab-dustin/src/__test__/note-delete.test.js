import React from 'react';
import {shallow} from 'enzyme';
import ActualNote from '../component/actual-note/note.js';

const note = {
  id: null,
  editing: null,
  content: 'yo',
  title: 'dawg',
  completed: null,
};

describe('testing delete note', () => {
  test('should delete a note', () => {
    let removeNote = jest.fn();

    shallow(<ActualNote content='content' note={note} noteRemove={removeNote}/>)
      .find('button')
      .simulate('click');
    expect(removeNote).toHaveBeenCalled();
  });
});
