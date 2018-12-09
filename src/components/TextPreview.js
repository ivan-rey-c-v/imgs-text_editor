import React from 'react'
import styled from 'styled-components'

function TextPreview(props) {
	return (
		<Li {...props}>
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
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
	border: ${props => (props.isActive ? '2px solid blue' : 'none')};

	${props => {
		const { color, background, font, size, align, weight } = props

		return {
			color,
			backgroundColor: background,
			fontFamily: `${font}, sans-serif`,
			fontSize: `${size}px`,
			fontWeight: weight,
			textAlign: align
		}
	}};
`

export default React.memo(TextPreview)
