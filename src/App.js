import React, { useContext, useCallback } from 'react'
import { AppContext } from './store/AppContext'
import styled from 'styled-components'

import domtoimage from 'dom-to-image'
import saveAs from 'file-saver'

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

	const handleSaveImage = useCallback(function(event) {
		console.log('saving image...')
		const dom = document.getElementById('dom-to-image')
		dom.classList.add('hide-overflow')
		domtoimage.toBlob(dom).then(function(blob) {
			saveAs(blob, 'my-node.png')
		})
	}, [])

	return (
		<main onClick={handleOnClickApp}>
			<MainHeader handleSaveImage={handleSaveImage} />
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
