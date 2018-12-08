import React from 'react'
import styled from 'styled-components'

function TextPreview(props) {
	return (
		<Li>
			<p>AAA</p>
		</Li>
	)
}

const Li = styled.li`
	height: 4rem;
	width: 4rem;
	min-width: 4rem;
	margin-right: 0.5rem;
	border: 1px solid darkgray;
	display: flex;
	align-items: center;
	justify-content: center;
`

export default React.memo(TextPreview)
