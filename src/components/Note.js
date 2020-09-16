import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { useHold } from './../hooks/useHold'

import { toggleNote } from './../reducers/notesReducer'
import { toggleSelection } from './../reducers/toggleSelectionReducer'

import './../transitions/selection.css'

export default function Item({ text }) {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.toggleSelection)
	const [ ref ] = useHold(() => dispatch(toggleSelection()), 500)

	return (
		<div className="w-full flex flex-row items-center border-b p-2 pt-8">
			<CSSTransition
				unmountOnExit
				in={state}
				timeout={300}
				classNames={'selection'}
			>
				<input
					className="mr-2 p-4"
					type="checkbox"
					onClick={() => state && dispatch(toggleNote(text))}
				/>
			</CSSTransition>
			<p 
				ref={ref}
				className="text-justify font-mono">
				{text}
			</p>
		</div>
	)
}
