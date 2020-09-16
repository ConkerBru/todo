import React from 'react'
import {CSSTransition} from 'react-transition-group'

import { useDarkMode } from './../hooks/useDarkMode'

import './../transitions/modal.css'

export default function Modal({isVisible, text, onClose}) {
	const { enabled } = useDarkMode()

	return (
		<CSSTransition
			in={isVisible}
			appear={true}
			unmountOnExit
			classNames="modal"
			timeout={300}>
			<div className="fixed top-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center px-4">
				<div className={`w-full md:w-2/4 xl:w-1/4 p-2 border rounded-sm flex flex-col
                    ${enabled ? 'bg-gray-800 text-gray-100 border-gray-100' : 'bg-gray-200 text-gray-900 border-gray-900'}`}>
					<p className="mb-4 p-4 text-justify">
						{text}
					</p>
					<div className="flex flex-row justify-end">
						<button
							onClick={() => onClose()}
							className={`border px-2 py-1 font-mono uppercase font-semibold
                    ${enabled ? 'bg-gray-900 text-gray-100 border-gray-100' : 'bg-gray-200 text-gray-900 border-gray-900'}`}>
                        Okay
						</button>
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}