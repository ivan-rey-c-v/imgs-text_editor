import React from 'react'
import styled from 'styled-components'

function PreviewList({ children }) {
	return <Ul>{children}</Ul>
}

const Ul = styled.ul`
	display: flex;
	width: 100%;
	overflow: auto;
	padding: 1rem 0.25rem;
`

export default React.memo(PreviewList)
