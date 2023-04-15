// --- Dependencies
import {useEffect, useRef} from 'react'

// --- Component
export default function Header({setTopBar, topBar}) {
	// --- State
	const topBarRef = useRef(null)

	useEffect(() => {
		// --- Set top bar height
		setTopBar(topBarRef.current.offsetHeight)
	}, [topBar])

	// --- Return
	return (
		<div className="top_bar" ref={topBarRef}>
			<p><span>-10%</span> Maintenant avec le code <span>DCG10</span></p>
		</div>
	)
}