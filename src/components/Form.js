import React, { useState } from 'react'
import { useClickOutside } from './../hooks/useClickOutside'


export default function Form({addItemHandler, inputRef, onClose}) {
	const [input, setInput] = useState('')
	const [ ref ] = useClickOutside(onClose, 300)

	const submitHandler = (event) => {
		event.preventDefault()
		event.target.note.value = ''
		if (input !== '') {
			addItemHandler(input)
			setInput('')
		}
	}

	return (
		<form
			ref={ref}
			onSubmit={(event) => submitHandler(event)}
			className="fixed bottom-0 w-full h-auto max-w-screen-sm px-2 pb-2 flex flex-row justify-center items-center">
			<label htmlFor="note"></label>
			<input
				ref={inputRef}
				type="text"
				id="note"
				name="note"
				className="w-full mr-4 p-2 text-gray-900"
				placeholder="TO-DO thing...."
				onChange={(event) => setInput(event.target.value)}
			/>
			<button
				type="submit"
				className="lg:flex p-2"
			>
				ADD
			</button>
		</form>
	)
}