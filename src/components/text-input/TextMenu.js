import React, { useCallback, useContext } from 'react'
import { AppContext } from '../../store/AppContext'
import styled from 'styled-components'

import TextFonts from './TextFonts'
import MenuItem from './MenuItem'
import AlignItem from './AlignItem'

function TextMenu(props) {
	const store = useContext(AppContext)

	const stopPropagation = useCallback(function(event) {
		// do not trigger App's onClick event: unset active texts and images
		event.stopPropagation()
	}, [])

	const handleSizeChange = useCallback(function(event) {
		const { name, value } = event.target
		const NotDigitsRE = /\D/gi
		const number = value.replace(NotDigitsRE, '')
		const option = {
			[name]: number
		}

		store.dispatch({ type: 'MODIFY_TEXT', option, index: props.index })
	}, [])

	const handleOnAlignClick = useCallback(
		function(event) {
			const alignItems = ['left', 'center', 'right']
			const alignIndex = alignItems.indexOf(props.align)

			const newIndex = (alignIndex + 1) % alignItems.length
			const newAlign = alignItems[newIndex]
			const option = {
				align: newAlign
			}

			store.dispatch({ type: 'MODIFY_TEXT', option, index: props.index })
		},
		[props.align]
	)

	const handleOnSelectChange = useCallback(function(event) {
		const { name, value } = event.target
		const option = {
			[name]: value
		}
		console.log('modifying select...')
		store.dispatch({ type: 'MODIFY_TEXT', option, index: props.index })
	}, [])

	return (
		<MenuDiv onClick={stopPropagation}>
			<TextFonts onChange={handleOnSelectChange} />
			<MenuItem name="size">
				<MenuInput
					value={props.size}
					name="size"
					onChange={handleSizeChange}
				/>
			</MenuItem>
			<MenuItem name="weight">
				<MenuInput
					as="select"
					onChange={handleOnSelectChange}
					name="weight"
				>
					<option value="400">400</option>
					<option value="500">500</option>
					<option value="600">600</option>
					<option value="900">900</option>
				</MenuInput>
			</MenuItem>
			<MenuItem name="align">
				<AlignItem align={props.align} onClick={handleOnAlignClick} />
			</MenuItem>

			<MenuItem name="zIndex">
				<MenuInput
					value={props.zIndex}
					name="zIndex"
					onChange={handleSizeChange}
				/>
			</MenuItem>
			<MenuItem name="color" />
			<MenuItem name="background" />
		</MenuDiv>
	)
}

const MenuDiv = styled.div`
	position: absolute;
	padding: 0.25rem 0;
	height: 3rem;
	width: auto;
	bottom: calc(100% + 0.5rem);
	left: calc(50% - 215px);
	transform-origin: 50% 100%;
	background-color: rgb(36, 42, 48);

	display: flex;
`
const MenuInput = styled.input`
	flex: 1;
	color: #5a476d;
	text-align: center;
	font-weight: 600;
	opacity: 0.75;
	border: none;
	border-radius: 4px;
	width: 2rem;
	appearance: none;
`

export default React.memo(TextMenu)
