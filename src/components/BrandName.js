import React from 'react'
import styled from 'styled-components'

function BrandName(props) {
	return (
		<Container>
			<Logo />
			<span>BrandName</span>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
`
const Logo = styled.img`
	height: 2rem;
	width: 2rem;
	background-color: rebeccapurple;
	margin-right: 0.5rem;
`

export default React.memo(BrandName)
