import React from 'react'

export default function Section({ children }) {
	return (
		<div className="w-full h-full max-w-screen-sm flex flex-col absolute font-sans">
			{children}
		</div>
	)
}
