import { useState } from 'react'

export function useLocalStorage(key, initialValue = undefined) {
	const [storedValue, setStoredValue] = useState(() => {
		const dataJSON = window.localStorage.getItem(key)
		return dataJSON ? JSON.parse(dataJSON) : initialValue
	})

	const setValue = value => {
		const valueToStore = value instanceof Function ? value(storedValue) : value
		setStoredValue(valueToStore)
		window.localStorage.setItem(key, JSON.stringify(valueToStore))
	}

	return [storedValue, setValue]
}