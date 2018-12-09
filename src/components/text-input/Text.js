import React, { useCallback, useContext } from 'react'
import { AppContext } from '../../store/AppContext'
import styled from 'styled-components'

import { Rnd } from 'react-rnd'
import TextMenu from './TextMenu'

function Text(props) {
	const store = useContext(AppContext)

	const handleOnChange = useCallback(function(event) {
		const value = event.target.value
		store.dispatch({ type: 'SET_TEXT', index: props.index, value })
	}, [])

	return (
		<StyledRnd
			default={{
				x: 50,
				y: 50,
				width: 200,
				height: 60
			}}
			isactive={props.isActive ? 'true' : 'false'}
			zindex={props.zIndex}
		>
			<Input {...props} onChange={handleOnChange} type="text" />

			{props.isActive && <TextMenu index={props.index} {...props} />}
		</StyledRnd>
	)
}

const Input = styled.input`
	word-wrap: break-word;
	word-break: break-all;
	width: 100%;
	height: 100%;
	display: inline-block;
	border: none;
	font-weight: 600;
	padding: 0.25rem 0.5rem;

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
	}}
`
const StyledRnd = styled(Rnd)`
	padding: 1px;
	border: ${props =>
		props.isactive === 'true' ? '2px solid #816dff' : 'none'};
	position: relative;
	z-index: ${props => props.zindex};
`

export default React.memo(Text)
