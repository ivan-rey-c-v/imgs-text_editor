import React from 'react'
import styled from 'styled-components'

import MainHeader from './components/MainHeader'
import Aside from './components/Aside'
import ContentSection from './components/ContentSection'

function App(props) {
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
