import React from 'react'
import {shallow} from 'enzyme'
import NoteForm from '../component/note-create-form'

describe('testing NoteForm', () => {
  test('should have default create state', () => {
    let wrapper = shallow(<NoteForm handleNoteCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('')
  })

  test('expect submit to invoke handleNoteCreate', () => {
    let noteCreate = (note) => {
      expect(note.title).toEqual('')
    }

    let wrapper = shallow(<NoteForm handleNoteCreate={noteCreate} />)
    wrapper.find('form').simulate('submit')
  })
})
