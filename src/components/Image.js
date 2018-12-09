import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import useDrag from '../hooks/useDrag'
import { Rnd } from 'react-rnd'

function Image(props) {
	const [isActive, setIsActive] = useState(false)
	const { top, left, handleDragOver, handleOnDragEnd } = useDrag()

	const handleClick = useCallback(function(event) {
		setIsActive(true)
	}, [])

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
