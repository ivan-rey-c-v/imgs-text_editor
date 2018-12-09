import React, { useContext, useCallback } from 'react'
import { AppContext } from './store/AppContext'
import styled from 'styled-components'

import MainHeader from './components/MainHeader'
import Aside from './components/Aside'
import ContentSection from './components/ContentSection'

function App(props) {
	// redux-like store: state, dispatch
	const store = useContext(AppContext)

	const handleOnClickApp = useCallback(function(event) {
		event.stopPropagation()
		store.dispatch({ type: 'REMOVE_ACTIVES' })
	}, [])

	return (
		<main onClick={handleOnClickApp}>
			<MainHeader />
			<StyledSection>
				<Aside />
				<ContentSection />
			</StyledSection>
		</main>
	)
}

const StyledSection = styled.section`
	display: flex;
`

export default React.memo(App)
