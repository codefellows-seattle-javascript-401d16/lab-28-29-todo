import React from 'react'
import { shallow } from 'enzyme'
import NoteCreateForm from '../component/note-create-form-component'

const event = {
  preventDefault: () => null,
  target: {
    value: true,
  },
}

describe('testing NoteCreateForm', () => {
  test('should have correct defalt state', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => {}} />)
    expect(wrapper.state('content')).toBe('')
  })

  test('expect submit to invoke handleNoteCreate', () => {
    let handleSubmit = note => {
      expect(note.content).toEqual('')
    }

    let wrapper = shallow(<NoteCreateForm handleNoteCreate={noteCreate} />)
    wrapper.find('form').simulate('submit', event)
  })
})
