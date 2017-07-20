import React from 'react';
import { shallow } from 'enzyme';
import NoteUpdateForm from '../components/note-update-form';

const note = {
  id: null,
  editing: null,
  content: null,
  completed: null,
}

const event = {
  preventDefault: () => null,
  target: {
    value: true,
  },
}

describe('testing delete note', () => {
  test('should remove note from state', () => {
    const update = jest.fn();
    const testUpdate = () => expect(update).toHaveBeenCalled();
    const wrapper = shallow(<NoteUpdateForm note={note} updateNote={update} handleClick={testUpdate}/>);
    wrapper.find('.update').simulate('click', event);
  })
})
