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
			const newText = {
				value: 'Add Text',
				color: 'black',
				background: 'lightblue',
				font: 'Arial',
				weight: '500',
				size: '16',
				zIndex: '10',
				align: 'center',
				isActive: false
			}

			return {
				...state,
				texts: [...state.texts, newText]
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

		case 'ACTIVATE_TEXT': {
			const texts = state.texts.map((text, index) => {
				return index === action.index
					? { ...text, isActive: true }
					: { ...text, isActive: false }
			})

			return { ...state, texts }
		}

		case 'MODIFY_TEXT': {
			const texts = state.texts.map((text, index) => {
				return index === action.index
					? { ...text, ...action.option }
					: text
			})
			console.log({ texts })

			return { ...state, texts }
		}

		case 'REMOVE_ACTIVES': {
			const unsetTexts = state.texts.map(text => {
				return { ...text, isActive: false }
			})

			return { ...state, texts: unsetTexts }
		}

		default: {
			return state
		}
	}
}
