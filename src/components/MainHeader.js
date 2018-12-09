import React from 'react'
import styled from 'styled-components'

import Button from './Button'
import BrandName from './BrandName'

function MainHeader(props) {
	return (
		<Header>
			<BrandName />
			<div>
				<Button value="Save Image" onClick={props.handleSaveImage} />
			</div>
		</Header>
	)
}

const Header = styled.header`
	height: 56px;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid lightgray;
`

export default React.memo(MainHeader)
