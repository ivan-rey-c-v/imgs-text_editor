import React, { useCallback, useContext } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

function Text(props) {
	const store = useContext(AppContext)

	const handleOnChange = useCallback(function(event) {
		const value = event.target.value
		store.dispatch({ type: 'SET_TEXT', index: props.index, value })
	}, [])

	return <Input {...props} onChange={handleOnChange} draggable />
}

const Input = styled.input`
	position: absolute;
	border: none;
	display: block;
	font-size: 1rem;
	font-weight: 600;
	padding: 1rem;
	top: 10rem;
	left: 10rem;
	min-width: auto;
	background-color: white;
`

export default React.memo(Text)
