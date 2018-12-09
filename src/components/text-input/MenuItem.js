import React from 'react'
import styled from 'styled-components'

function MenuItem(props) {
	return (
		<Item>
			<Name>{props.name}</Name>
			{props.children}
		</Item>
	)
}

const Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 2.5rem;
	padding: 0 0.4rem;
`
const Name = styled.p`
	font-weight: 600;
	font-size: 0.75rem;
	color: white;
`

export default React.memo(MenuItem)
