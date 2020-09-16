export default function notesReducer(state = false, action) {
	switch (action.type) {
	case 'TOGGLE_SELEC':
		return !state
	default:
		return state
	}
}

export const toggleSelection = () => {
	return async (dispatch) => {
		dispatch({
			type: 'TOGGLE_SELEC',
			data: null,
		})
	}
}
