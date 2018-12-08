import React, { useReducer } from 'react'

import storeReducer from './storeReducer'
import initialState from './initialState'

export const AppContext = React.createContext()

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(storeReducer, initialState)

	const value = {
		state,
		dispatch
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
