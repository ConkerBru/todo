import React from 'react'

import {useDarkMode} from './../hooks/useDarkMode'

export default function Container({ children }) {
	const { enabled } = useDarkMode()
	return (
		<main className={`w-full h-full overflow-x-hidden flex flex-col justify-start items-center transition-colors duration-300 
							${enabled ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
			{children}
		</main>
	)
}