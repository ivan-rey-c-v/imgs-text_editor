export default function storeReducer(state, action) {
	switch (action.type) {
		case 'ADD_IMAGE': {
			return {
				...state,
				// include all previous images and add all the new images
				images: [...state.images, ...action.images]
			}
		}
		case 'ADD_TEXT': {
			return {
				...state,
				texts: [...state.texts, action.text]
			}
		}

		case 'SET_TEXT': {
			const texts = [...state.texts]
			texts[action.index].value = action.value

			return {
				...state,
				texts
			}
		}

		default: {
			return state
		}
	}
}
