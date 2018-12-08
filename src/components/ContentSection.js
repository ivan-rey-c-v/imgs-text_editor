import React from 'react'
import styled from 'styled-components'

function ContentSection(props) {
	return <MainSection>{/*  */}</MainSection>
}

const MainSection = styled.section`
	flex: 1;
	height: calc(100vh - 56px);
	background: repeating-linear-gradient(
			to right,
			transparent,
			transparent 20px,
			white 20px,
			white 21px
		),
		repeating-linear-gradient(
			to bottom,
			lightgray,
			lightgray 20px,
			white 20px,
			white 21px
		);
`

export default React.memo(ContentSection)
