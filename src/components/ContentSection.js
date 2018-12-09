import React, { useContext, useCallback } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import Image from './Image'
import Text from './text-input/Text'

function ContentSection(props) {
	const store = useContext(AppContext)

	const handleOnClickText = useCallback(
		index => event => {
			// stop propagating AppComponent's event: reseting active texts and images
			event.stopPropagation()
			store.dispatch({ type: 'ACTIVATE_TEXT', index })
		},
		[]
	)

	return (
		<MainSection className="bg-grid">
			{store.state.images.map((imageFile, index) => (
				<Image
					src={window.URL.createObjectURL(imageFile)}
					key={`image-${index}`}
				/>
			))}

			{store.state.texts.map((text, index) => (
				<Text
					{...text}
					key={`text=${index}`}
					index={index}
					onClick={handleOnClickText(index)}
				/>
			))}
		</MainSection>
	)
}

const MainSection = styled.section`
	flex: 1;
	height: calc(100vh - 56px);
	position: relative;
`

export default React.memo(ContentSection)
