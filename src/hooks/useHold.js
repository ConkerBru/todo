import {useRef, useState, useEffect} from 'react'

export function useHold(callback, delay = null) {
	const clickThreshold = 200
	delay = delay ? delay < clickThreshold ? clickThreshold : delay : null

	const savedCallback = useRef()

	useEffect(() => {
		savedCallback.current = callback
	}, [callback])
    
	const [isHolding, setIsHolding] = useState(false)
	const [isDoneHolding, setIsDoneHolding] = useState(false)
	const ref = useRef()

	useEffect(() => {

		function clearMouseTimeouts(event, id) {
			event.target.addEventListener('mouseup', () => clearTimeout(id))
			event.target.addEventListener('mouseleave', () => clearTimeout(id))
		}

		function clearTouchTimeouts(event, id) {
			event.target.addEventListener('touchend', () => clearTimeout(id))
			event.target.addEventListener('touchmove', () => clearTimeout(id))
		}

		function tick() {
			savedCallback.current()
			setIsDoneHolding(true)
			setIsHolding(false)
		}

		function addMouseHoldEvents(event) {
			let id = setTimeout(tick, delay)
			clearMouseTimeouts(event, id)
		}

		function addTouchHoldEvents(event) {
			let id = setTimeout(tick, delay)
			clearTouchTimeouts(event, id)
		}

		const element = ref.current

		if(element) {
			
			element.addEventListener('mousedown', (event) => {
				//Delay on setIsHolding to prevent weird animations
				const id = setTimeout(() => setIsHolding(true), clickThreshold)
				clearMouseTimeouts(event, id)
				if (delay !== null) {
					addMouseHoldEvents(event)
				}
			})
			element.addEventListener('mouseup', () => setIsHolding(false))
			element.addEventListener('mouseleave', () => setIsHolding(false))

			element.addEventListener('touchstart', (event) => {
				//Delay on setIsHolding to prevent weird animations
				const id = setTimeout(() => setIsHolding(true), clickThreshold)
				clearTouchTimeouts(event, id)
				if (delay !== null) {
					addTouchHoldEvents(event)
				}
			})
			element.addEventListener('touchend', () => setIsHolding(false))
			element.addEventListener('touchmove', () => setIsHolding(false))
		}

	}, [delay])
    
	return [ref, isHolding, isDoneHolding]
}