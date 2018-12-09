import React, { useContext, useCallback } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import FileInput from './FileInput'
import Button from './Button'
import PreviewList from './PreviewList'
import ImagePreview from './ImagePreview'
import TextPreview from './TextPreview'

function Aside(props) {
	const store = useContext(AppContext)

	const handleAddText = useCallback(function(event) {
		store.dispatch({ type: 'ADD_TEXT' })
	}, [])

	const handleOnClickText = useCallback(
		index => event => {
			// stop propagating AppComponent's event: reseting active texts and images
			event.stopPropagation()
			store.dispatch({ type: 'ACTIVATE_TEXT', index })
		},
		[]
	)

	return (
		<StyledAside>
			<Section>
				<FileInput />
				<PreviewList>
					{store.state.images.map((imageFile, index) => (
						<ImagePreview
							key={`image-${index}`}
							src={window.URL.createObjectURL(imageFile)}
						/>
					))}
				</PreviewList>
			</Section>

			<Section>
				<Button value="Add Text" onClick={handleAddText} />
				<PreviewList>
					{store.state.texts.map((text, index) => (
						<TextPreview
							key={`text-${index}`}
							{...text}
							onClick={handleOnClickText(index)}
						/>
					))}
				</PreviewList>
			</Section>
		</StyledAside>
	)
}

const StyledAside = styled.aside`
	padding: 1rem;
	width: 300px;
`
const Section = styled.section`
	padding: 2rem 0;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export default React.memo(Aside)
