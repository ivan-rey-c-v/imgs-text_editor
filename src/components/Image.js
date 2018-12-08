import React from 'react'
import styled from 'styled-components'

function Image(props) {
	return <StyledImg src={props.src} />
}

const StyledImg = styled.img`
	height: 10rem;
	width: 10rem;
`

export default React.memo(Image)
