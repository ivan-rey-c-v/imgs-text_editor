import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AlignLeft } from '../../icons/AlignLeft.svg'
import { ReactComponent as AlignCenter } from '../../icons/AlignCenter.svg'
import { ReactComponent as AlignRight } from '../../icons/AlignRight.svg'

function AlignItem(props) {
	const AlignSVG = {
		left: AlignLeft,
		center: AlignCenter,
		right: AlignRight
	}[props.align]

	return (
		<Div {...props}>
			<AlignSVG />
		</Div>
	)
}

const Div = styled.div`
	flex: 1;
	width: 2rem;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	> svg {
		height: 60%;
		width: 90%;
		fill: lightgray;
	}
`

export default React.memo(AlignItem)
