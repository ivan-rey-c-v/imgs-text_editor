import React from 'react'
import styled from 'styled-components'

function Button(props) {
	return <StyledButton>{props.value}</StyledButton>
}

const StyledButton = styled.button`
	padding: 0.4rem 1rem;
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 1px;
	color: #54546b;
	border: 1px solid darkgray;
	cursor: pointer;
`

export default React.memo(Button)
