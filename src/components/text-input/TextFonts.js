import React from 'react'
import styled from 'styled-components'

const commonFonts = [
	'Arial',
	'Comic Sans MS',
	'Courier New',
	'Georgia',
	'Impact',
	'Times New Roman',
	'Trebuchet MS',
	'Verdana',
	'Wingdings'
]

function TextFonts(props) {
	return (
		<Select {...props} name="font">
			{commonFonts.map(font => (
				<Option value={font} key={font} font={font}>
					{font}
				</Option>
			))}
		</Select>
	)
}

const Select = styled.select`
	border: none;
	padding: 0.25rem 0.5rem;
	font-size: 0.75rem;
	font-weight: 600;
	color: white;
	background-color: rgb(36, 42, 48);
	max-width: 8rem;
	appearance: none;
`
const Option = styled.option`
	font-family: ${props => `${props.font}, sans-serif`};
`

export default React.memo(TextFonts)
