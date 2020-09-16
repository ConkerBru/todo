import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { useLocalStorage } from './../hooks/useLocalStorage'

import List from './../components/List'
import Form from './../components/Form'
import AddButton from './../components/AddButton'
import OptionsPanel from './../components/OptionsPanel'

import { createNote } from '../reducers/notesReducer'

import './../transitions/form.css'

export default function Index() {
  const dispatch = useDispatch()
  const state = useSelector((state) =>
    state.notes.filter((s) => s.type === 'ACTIVE')
  )
  // eslint-disable-next-line no-unused-vars
  const [storedNotes, setStoredNotes] = useLocalStorage('notes', [])

  const [isFormVisible, setIsFormVisible] = useState(false)
  const inputRef = useRef(null)

  const showForm = async () => {
    await setIsFormVisible(true)
    inputRef.current.focus()
  }

  const addNote = (note) => {
    const newNote = {
      text: note,
      type: 'ACTIVE',
      update: false,
    }
    dispatch(createNote(newNote))
    setStoredNotes((notes) => [...notes, newNote])
    setIsFormVisible(false)
  }

  return (
    <>
      <hr className="my-2" />
      <div className="w-full h-auto flex flex-row justify-end items-center">
        <OptionsPanel updateTo={'COMPLETED'} />
        <AddButton onClickHandler={() => showForm()} />
      </div>

      <List
        items={state}
        onEmptyMessage='Nothing to see yet. Use the "Add Note" button to add some stuff.'
      />

      <CSSTransition
        unmountOnExit
        in={isFormVisible}
        timeout={300}
        classNames="form"
      >
        <Form
          inputRef={inputRef}
          addItemHandler={addNote}
          onClose={() => setIsFormVisible(false)}
        />
      </CSSTransition>
    </>
  )
}
