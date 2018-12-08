import React from 'react'
import styled from 'styled-components'

function ImagePreview(props) {
	return (
		<Li>
			<Img src={props.src} />
		</Li>
	)
}

const Li = styled.li`
	height: 4rem;
	width: 4rem;
	min-width: 4rem;
	margin-right: 0.5rem;
	border: 1px solid darkgray;
`

const Img = styled.img`
	height: 100%;
	width: 100%;
`

export default React.memo(ImagePreview)
