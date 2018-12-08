import { useState, useCallback } from 'react'

function useDrag() {
	const [top, setTop] = useState(0)
	const [left, setLeft] = useState(0)
	const [startMousePos, setStartMousePos] = useState(null)

	// useCallback memoizes the function
	// this makes the function not re-renders as with the Image-component
	const handleDragOver = useCallback(
		function(event) {
			const { clientX, clientY } = event

			const mouseDiffTop = startMousePos ? clientY - startMousePos.top : 0
			const mouseDiffLeft = startMousePos
				? clientX - startMousePos.left
				: 0

			setTop(top + mouseDiffTop)
			setLeft(left + mouseDiffLeft)

			setStartMousePos({
				top: clientY,
				left: clientX
			})
		},
		[startMousePos]
	)

	const handleOnDragEnd = useCallback(function(event) {
		setStartMousePos(null)
	}, [])

	return {
		top,
		left,
		handleDragOver,
		handleOnDragEnd
	}
}

export default useDrag
