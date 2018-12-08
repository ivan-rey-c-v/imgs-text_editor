import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

function Image(props) {
	const [pos, setPos] = useState(null)
	const [startMousePos, setStartMousePos] = useState(null)

	// useCallback memoizes the function
	// this makes the function not re-renders as with the Image-component
	const handleDragOver = useCallback(
		function(event) {
			const { parentTop, parentLeft } = props.parentPos
			const { clientX, clientY } = event

			if (!startMousePos) {
				return setStartMousePos({
					top: clientY,
					left: clientX
				})
			}

			const pos = {
				//
			}

			console.log({ pos })

			setPos(pos)
		},
		[startMousePos]
	)

	const handleOnDragEnd = useCallback(function(event) {
		setStartMousePos(null)
	}, [])

	return (
		<StyledImg
			src={props.src}
			draggable
			//
			onDragOver={handleDragOver}
			onDragEnd={handleOnDragEnd}
			pos={pos}
		/>
	)
}

const StyledImg = styled.img`
	height: 10rem;
	width: 10rem;
	position: absolute;

	${props => {
		if (props.pos) {
			return {
				top: `${props.pos.top}px`,
				left: `${props.pos.left}px`
			}
		}
	}}
`

export default React.memo(Image)
