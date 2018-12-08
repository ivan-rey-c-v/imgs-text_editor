import React, { useContext, useRef } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

const acceptedImages = 'image/x-png,image/gif,image/jpeg'

function FileInput(props) {
	const fileInputRef = useRef(null)
	const store = useContext(AppContext)

	const handleFileChange = e => {
		if (fileInputRef) {
			const images = fileInputRef.current.files
			// dispatch an action to src/store/storeReducer.js
			store.dispatch({ type: 'ADD_IMAGE', images })
		}
	}

	console.log({ fileInputRef })

	return (
		<div>
			<Label htmlFor="input-file">Add Image</Label>
			<HiddenInputFile
				ref={fileInputRef}
				type="file"
				id="input-file"
				name="input-file"
				accept={acceptedImages}
				onChange={handleFileChange}
				// user can select multiple images
				multiple
			/>
		</div>
	)
}

const Label = styled.label`
	padding: 0.4rem 1rem;
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: #54546b;
	border: 1px solid darkgray;
	cursor: pointer;
`
const HiddenInputFile = styled.input`
	display: none;
`

export default React.memo(FileInput)
