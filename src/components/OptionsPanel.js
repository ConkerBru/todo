import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'

import { useLocalStorage } from './../hooks/useLocalStorage'

import { toggleSelection } from './../reducers/toggleSelectionReducer'
import { updateNotes, deleteNotes } from './../reducers/notesReducer'

import './../transitions/selection.css'

export default function OptionsPanel({updateTo = null}) {
	const toggleState = useSelector(state => state.toggleSelection)
	const notes = useSelector(state => state.notes)
	const dispatch = useDispatch()
	// eslint-disable-next-line no-unused-vars
	const [storedNotes, setStoredNotes] = useLocalStorage('notes', [])

	useEffect(() => {
		setStoredNotes(notes)
	}, [notes, setStoredNotes])

	return (
		<CSSTransition
			unmountOnExit
			in={toggleState}
			timeout={300}
			classNames="selection"
		>
			<div className="h-auto w-2/4 flex flex-row justify-start items-center ml-4 sm:ml-0">
				<button className="underline text-red-800"
					onClick={() =>
						dispatch(toggleSelection())}>
					<svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
				</button>
				<button 
					className="text-yellow-700 ml-6"
					onClick={() => dispatch(toggleSelection()) && dispatch(deleteNotes())}>
					<svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
				</button>
				{updateTo && (
					<button 
						className="text-blue-700 ml-6"
						onClick={() => dispatch(toggleSelection()) && dispatch(updateNotes(updateTo))}>
						<svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
					</button>
				)}
				
			</div>
		</CSSTransition>
	)
}
