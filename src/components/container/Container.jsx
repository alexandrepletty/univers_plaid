// --- Dependencies
import {Fragment, useState, useEffect} from 'react'

// --- Components
import Top from '../layout/Top'
import Header from '../layout/Header'
import Main from '../layout/Main'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import NavToggle from '../navToggle/NavToggle'


// --- Component
export default function Container({children}) {
	// --- State
	const [topBar, setTopBar] = useState(0)
	const [nav, setNav] = useState(false)

	// --- Return
	return (
		<Fragment>
			<NavToggle isOpen={nav} setIsOpen={status => setNav(status)}>
				<Nav/>
				<button onClick={() =>  setNav(false)}><i className="fi fi-rr-cross" /></button>
			</NavToggle>
			<div className="container">
				<Top setTopBar={data => setTopBar(data)} topBar={topBar} />
				<Header topBar={topBar} openNav={status => setNav(status)} />
				<Main children={children} />
				<Footer />
			</div>
		</Fragment>
	)
}