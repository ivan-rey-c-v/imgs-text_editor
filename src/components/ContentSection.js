import React, { useContext, useRef } from 'react'
import { AppContext } from '../store/AppContext'
import styled from 'styled-components'

import Image from './Image'
import Text from './Text'

function ContentSection(props) {
	const sectionRef = useRef(null)
	const store = useContext(AppContext)

	return (
		<MainSection className="bg-grid" ref={sectionRef}>
			{store.state.images.map((imageFile, index) => (
				<Image
					src={window.URL.createObjectURL(imageFile)}
					key={`image-${index}`}
					sectionRef={sectionRef}
					parentPos={{
						parentTop: sectionRef.current.offsetTop,
						parentLeft: sectionRef.current.offsetLeft
					}}
				/>
			))}

			{store.state.texts.map((text, index) => (
				<Text {...text} key={`text=${index}`} index={index} />
			))}
		</MainSection>
	)
}

const MainSection = styled.section`
	flex: 1;
	height: calc(100vh - 56px);
	position: relative;
`

export default React.memo(ContentSection)
