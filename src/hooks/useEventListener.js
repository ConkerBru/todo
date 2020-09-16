import {useRef, useEffect} from 'react'

export function useEventListener(eventName, callback, element = window) {
	const savedCallback = useRef()

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])
    
	useEffect(() => {

		if(!(element && element.addEventListener))
			return
            
		const eventListener = event => savedCallback.current(event)
		element.addEventListener(eventName, eventListener)

		return () => {
			element.removeEventListener(eventName, eventListener)
		}
	}, [eventName, element])
}