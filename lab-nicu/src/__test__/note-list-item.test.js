import React from 'react';
import { shallow } from 'enzyme';

import NoteListItem from '../component/note-list-item/';

describe('testing note list item', () => {
  test('expect change to invoke handleCreateFormChange', () => {
    const note = {content: 'EAT', id:'1o12kdsmafmp1', isComplete:false, editing:false};

    let handleDeleteNote = (n) => {
      expect(n.content).toEqual('EAT');
      expect(n.id).toEqual('1o12kdsmafmp1');
      expect(n.isComplete).toEqual(false);
      expect(n.editing).toEqual(false);

    };
    let wrapper = shallow(<NoteListItem keyVal={1} note={note} handleDelete={handleDeleteNote} />);
    wrapper.find('button').simulate('click');
  });
});