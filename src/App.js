import React, { useContext } from 'react'
import { AppContext } from './store/AppContext'
import styled from 'styled-components'

import MainHeader from './components/MainHeader'
import Aside from './components/Aside'
import ContentSection from './components/ContentSection'

function App(props) {
	// redux-like store: state, dispatch
	const store = useContext(AppContext)

	return (
		<main>
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
