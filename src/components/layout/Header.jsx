// --- Dependencies
import {useState, useEffect, useRef} from 'react'

// --- Assets
import logo from '../../assets/logo.svg'
import logoSmall from '../../assets/logo_small.svg'

// --- Components
import Nav from './Nav'

// --- Component
export default function Header({topBar, openNav}) {
	// --- State
	const [fix, setFix] = useState(false) // --- Fixed header
	const [headerHeight, setHeaderHeight] = useState(0) // --- Header height
	const headerHeightRef = useRef(null) // --- Header height ref

	useEffect(() => {
		// --- Set header height
		setHeaderHeight(headerHeightRef.current.offsetHeight)
	}, [headerHeight])

	// --- Fixed header
	const setFixed = () => {
		// --- Check if scroll is over top bar
		if(window.scrollY >= topBar+30) {
			// --- Set fixed header
			setFix(true)
		} else {
			// --- Set normal header
			setFix(false)
		}
	}

	// --- Event listener
	window.addEventListener('scroll', setFixed)

	// --- Return
	return (
		<header className="header" style={{paddingTop: headerHeight+30}}>
			<div className={`header_middle${fix?' header_fixed' : ''}`} ref={headerHeightRef} style={{top:topBar+30}}>
				<div className="header_logo">
					<div className="header_toggle">
						<button onClick={() => openNav(true)}>
							<i className="fi fi-rr-menu-burger" />
						</button>
					</div>
					<img src={logo} className="logo" alt="Logo"/>
					<img src={logoSmall} className="logo_small" alt="Logo Small"/>
				</div>
				<div className="header_menu">
					<Nav />
				</div>
				<div className="header_action">
					<ul>
						<li><a href="/"><i className="fi fi-rr-search"/></a></li>
						<li><a href="/"><i className="fi fi-rr-shopping-bag"/><span>4</span></a></li>
						<li><a href="/"><i className="fi fi-rr-user"/></a></li>
					</ul>
				</div>
			</div>
		</header>
	)
}