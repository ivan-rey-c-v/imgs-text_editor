import React, { useCallback, useContext } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import { Rnd } from 'react-rnd'

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
		>
			<Input {...props} onChange={handleOnChange} draggable />
		</StyledRnd>
	)
}

const Input = styled.input`
	width: 100%;
	height: 100%;
	display: inline-block;
	border: none;
	font-size: 1rem;
	font-weight: 600;
	padding: 0.25rem 0.5rem;
	text-align: center;

	background-color: white;
`
const StyledRnd = styled(Rnd)`
	padding: 1px;
`

export default React.memo(Text)
