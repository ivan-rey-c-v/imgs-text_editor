import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import useDrag from '../hooks/useDrag'

function Image(props) {
	const [isActive, setIsActive] = useState(false)
	const { top, left, handleDragOver, handleOnDragEnd } = useDrag()

	const handleClick = useCallback(function(event) {
		setIsActive(true)
	}, [])

	return (
		<OuterDiv
			style={{
				top: `${top}px`,
				left: `${left}px`
			}}
		>
			<InnerDiv isActive={isActive}>
				<StyledImg
					src={props.src}
					draggable
					onClick={handleClick}
					onDragOver={handleDragOver}
					onDragEnd={handleOnDragEnd}
				/>

				{isActive && <VerticalResizeDiv side="top" />}
				{isActive && <VerticalResizeDiv side="bottom" />}
				{isActive && <HorizontalResizeDiv side="left" />}
				{isActive && <HorizontalResizeDiv side="right" />}
			</InnerDiv>
		</OuterDiv>
	)
}

const OuterDiv = styled.div`
	height: 10rem;
	width: 10rem;
	position: absolute;
	cursor: pointer;
`
const StyledImg = styled.img`
	height: 100%;
	width: 100%;
`
const InnerDiv = styled.div`
	height: 100%;
	width: 100%;
	border: ${props => (props.isActive ? '2px solid blue' : 'none')};
	position: relative;
`
const VerticalResizeDiv = styled.div`
	background-color: red;
	height: 6px;
	width: 1.5rem;
	cursor: text;

	position: absolute;
	left: calc(50% - 0.75rem);
	${props => (props.side === 'top' ? { top: '-3px' } : { bottom: '-3px' })}
`
const HorizontalResizeDiv = styled.div`
	background-color: red;
	height: 1.5rem;
	width: 6px;
	cursor: vertical-text;

	position: absolute;
	top: calc(50% - 0.75rem);
	${props => (props.side === 'left' ? { left: '-3px' } : { right: '-3px' })}
`

export default React.memo(Image)
