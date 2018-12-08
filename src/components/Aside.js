import React, { useContext, useCallback } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import FileInput from './FileInput'
import Button from './Button'

function Aside(props) {
	const store = useContext(AppContext)

	const handleAddText = useCallback(function(event) {
		const text = {
			value: 'Add Text',
			color: 'darkgray'
		}
		store.dispatch({ type: 'ADD_TEXT', text })
	}, [])

	return (
		<StyledAside>
			<Section>
				<FileInput />
			</Section>

			<Section>
				<Button value="Add Text" onClick={handleAddText} />
			</Section>
		</StyledAside>
	)
}

const StyledAside = styled.aside`
	padding: 1rem;
	width: 300px;
`
const Section = styled.section`
	margin: 1rem 0;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: lightgoldenrodyellow;
`

export default React.memo(Aside)
