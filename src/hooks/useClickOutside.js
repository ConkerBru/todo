import { useEffect, useRef } from 'react'

export function useClickOutside(callback, delay = null) {
	const savedCallback = useRef()

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])
    
	const ref = useRef()
    
	useEffect(() => {
		const element = ref.current
		if(!element)
			return

		function check(event) {
			if(!element.contains(event.target)) {
				savedCallback.current()
			}
		}

		let id
		if(delay !== null) {
			id = setTimeout(() => window.addEventListener('click', check), delay)
		} else {
			window.addEventListener('click', check)
		}
		return () => {
			if(delay !== null) {
				clearTimeout(id)
			}
			window.removeEventListener('click', check)
		}

	}, [delay])
    
	return [ ref ]
}