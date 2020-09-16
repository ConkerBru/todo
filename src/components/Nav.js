import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDarkMode } from './../hooks/useDarkMode'

import DarkModeToggle from './DarkModeToggle'

export default function Nav({ routes }) {
	const { enabled } = useDarkMode()

	return (
		<nav className="w-full max-w-screen-sm">
			<ul className="w-full flex flex-row justify-around items-center p-4">
				<li>
					<DarkModeToggle />
				</li>
				{routes.map(({ path, name }) => (
					<li key={path}>
						<NavLink exact to={path} 
							className="font-mono antialiased font-semibold uppercase" 
							activeClassName={`border-b-2 ${enabled ? 'border-gray-100' : 'border-gray-900'}`}>
							{name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
