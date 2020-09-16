export default function notesReducer(state = [], action) {
	switch (action.type) {
	case 'INIT_NOTES':
		return action.data
	case 'CREATE_NOTE':
		return [...state, action.data]
	case 'TOGGLE_NOTE':
		return state.map(e => (e.text === action.data ? {...e, update: !e.update} : {...e} ))
	case 'UPDATE_NOTES':
		return state.map(e => (e.update === true ? {...e, update: false, type: action.data} : {...e} ))
	case 'DELETE_NOTES':
		return state.filter(e => e.update !== true)
	default:
		return state
	}
}

export const initializeNotes = (notes) => {
	return (dispatch) => {
		dispatch({
			type: 'INIT_NOTES',
			data: notes,
		})
	}
}

export const createNote = (note) => {
	return (dispatch) => {
		dispatch({
			type: 'CREATE_NOTE',
			data: note,
		})
	}
}

export const toggleNote = (text) => {
	return async (dispatch) => {
		dispatch({
			type: 'TOGGLE_NOTE',
			data: text,
		})
	}
}

export const updateNotes = (type) => {
	return async (dispatch) => {
		dispatch({
			type: 'UPDATE_NOTES',
			data: type,
		})
	}
}

export const deleteNotes = () => {
	return async (dispatch) => {
		dispatch({
			type: 'DELETE_NOTES',
			data: null,
		})
	}
}



