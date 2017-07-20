import React from 'react'
import {shallow} from 'enzyme'
import NoteCreateForm from '../component/note-create-form'

describe('testing NoteCreateForm', () => {
  test('should have default create state', () => {
    let wrapper = shallow(<NoteCreateForm handleNoteCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('')
  })

  test('expect submit to invoke handleNoteCreate', () => {
    let noteCreate = (note) => {
      expect(note.title).toEqual('')
    }

    let wrapper = shallow(<NoteCreateForm handleNoteCreate={noteCreate} />)
    wrapper.find('form').simulate('submit')
  })
})
