import React, { useContext, createContext } from 'react'

import { useLocalStorage } from './useLocalStorage'

const darkModeContext = createContext()

function useDarkModeContext() {
	const [enabledState, setEnabledState] = useLocalStorage('dark-mode')
	const enabled = enabledState !== undefined ? enabledState : false
	const toggleDarkMode = () => setEnabledState(!enabledState)
	return {enabled, toggleDarkMode}
}

export function ProvideDarkMode({children}) {
	const darkMode = useDarkModeContext()
	return (
		<darkModeContext.Provider value={darkMode}>
			{children}
		</darkModeContext.Provider>
	)
}

export function useDarkMode() {
	return useContext(darkModeContext)
}