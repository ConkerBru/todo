import React, { useState } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { Swipeable } from 'react-swipeable'
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'

import { toggleSelection } from './../reducers/toggleSelectionReducer'

import Section from './Section'

import './../transitions/page.css'

export default function Carousel ({ routes }) {
	const history = useHistory()

	const pathIndex = routes.findIndex(
		({ path }) => path === history.location.pathname
	)

	const [swipeData, setSwipeData] = useState({
		direction: 'none',
		index: pathIndex
	})

	const toggleState = useSelector(state => state.toggleSelection)
	const dispatch = useDispatch()

	const swipeToLeft = async () => {
		const nextIndex = swipeData.index === routes.length - 1 ? 0 : swipeData.index + 1
		setSwipeData({
			direction: 'left',
			index: nextIndex
		})
		if(toggleState)
			dispatch(toggleSelection())
		history.push(`${routes[nextIndex].path}`)
	}

	const swipeToRight = async () => {
		const nextIndex = swipeData.index === 0 ? routes.length - 1 : swipeData.index - 1
		setSwipeData({
			direction: 'right',
			index: nextIndex
		})
		if(toggleState)
			dispatch(toggleSelection())
		history.push(`${routes[nextIndex].path}`)
	}

	return (
		<>
			<Swipeable
				trackMouse
				onSwipedLeft={() => swipeToLeft()}
				onSwipedRight={() => swipeToRight()}
				className="w-full h-full flex flex-col justify-start items-center relative"
			>
				{routes.map(({ path, Component }) => (
					<Route exact path={path} key={path}>
						{({ match }) => (
							<CSSTransition
								key={path}
								in={match !== null}
								unmountOnExit
								timeout={300}
								classNames={`${swipeData.direction === 'right' ? 'page' : 'page-inverse'}`}
							>
								<Section>
									<Component />
								</Section>
							</CSSTransition>
						)}
					</Route>
				))}
			</Swipeable>
		</>
	)
}