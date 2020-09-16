import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { ProvideDarkMode } from './hooks/useDarkMode'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useTimeout } from './hooks/useTimeout'

import { initializeNotes } from './reducers/notesReducer'

import Container from './components/Container'
import Modal from './components/Modal'
import Nav from './components/Nav'
import CarouselWithSwipe from './components/CarouselWithSwipe'

import Index from './pages/index'
import Completed from './pages/completed'

const routes = [
  { path: '/', name: 'Active', Component: Index },
  { path: '/completed', name: 'Completed', Component: Completed },
]

const tutorial =
  'Welcome to yet another to-do app. Hold an item to display some options. You can swap between tabs with the mouse, your finger or clicking in the nav above. This app was made with React.'

export default function App() {
  const [firstTime, setFirstTime] = useLocalStorage('show-help', true)
  const [helpTimeout, setHelpTimeout] = useState(false)
  useTimeout(() => setHelpTimeout(true), 2000)

  const [storedNotes] = useLocalStorage('notes', [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes(storedNotes))
  }, [dispatch, storedNotes])

  return (
    <ProvideDarkMode>
      {helpTimeout && (
        <Modal
          isVisible={firstTime}
          text={tutorial}
          onClose={() => setFirstTime(false)}
        />
      )}
      <Container>
        <Router>
          <Nav routes={routes} />
          <CarouselWithSwipe routes={routes} />
        </Router>
      </Container>
    </ProvideDarkMode>
  )
}
