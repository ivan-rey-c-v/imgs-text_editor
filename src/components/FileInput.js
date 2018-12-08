import React from 'react'
import styled from 'styled-components'

const acceptedImages = 'image/x-png,image/gif,image/jpeg'

function FileInput(props) {
	return (
		<div>
			<Label htmlFor="input-file">Add Image</Label>
			<HiddenInputFile
				id="input-file"
				type="file"
				name="input-file"
				accept={acceptedImages}
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
