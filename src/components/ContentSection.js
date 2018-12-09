import React, { useContext, useCallback } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import { Rnd } from 'react-rnd'
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
		<MainSection>
			<DomToImageContainer id="dom-to-image">
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
			</DomToImageContainer>
		</MainSection>
	)
}

const MainSection = styled.section`
	flex: 1;
	height: calc(100vh - 56px);
	position: relative;
	background: repeating-linear-gradient(
			to right,
			transparent,
			transparent 20px,
			white 20px,
			white 21px
		),
		repeating-linear-gradient(
			to bottom,
			lightgray,
			lightgray 20px,
			white 20px,
			white 21px
		);
`
const DomToImageContainer = styled.div`
	border: dashed red;
	background-color: lightslategray;

	position: absolute;
	top: 20px;
	left: 40px;
	height: 30rem;
	width: 30rem;
`

export default React.memo(ContentSection)
