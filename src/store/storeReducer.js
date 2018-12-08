export default function storeReducer(state, action) {
	switch (action.type) {
		case 'ADD_IMAGE': {
			return {
				...state,
				// include all previous images and add all the new images
				images: [...state.images, ...action.images]
			}
		}

		default: {
			return state
		}
	}
}
