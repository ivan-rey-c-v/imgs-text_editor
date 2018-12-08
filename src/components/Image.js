import React from 'react'
import styled from 'styled-components'

import useDrag from '../hooks/useDrag'

function Image(props) {
	const { top, left, handleDragOver, handleOnDragEnd } = useDrag()

	return (
		<StyledImg
			src={props.src}
			draggable
			//
			onDragOver={handleDragOver}
			onDragEnd={handleOnDragEnd}
			style={{
				top: `${top}px`,
				left: `${left}px`
			}}
		/>
	)
}

const StyledImg = styled.img`
	height: 10rem;
	width: 10rem;
	position: absolute;
`

export default React.memo(Image)
