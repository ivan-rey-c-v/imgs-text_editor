import React from 'react'
import styled from 'styled-components'

import { Rnd } from 'react-rnd'

function Image(props) {
	return (
		<Rnd
			default={{
				x: 0,
				y: 0,
				width: 320,
				height: 200
			}}
		>
			<StyledImg src={props.src} draggable="false" />
		</Rnd>
	)
}

const StyledImg = styled.img`
	height: 100%;
	width: 100%;
`

export default React.memo(Image)
