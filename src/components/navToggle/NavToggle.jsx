// --- Component
export default function NavToggle({isOpen, children, setIsOpen}) {
	// --- Return
	return (
		<div className={`nav${isOpen ? ' nav_show' : ''}`}>
			<div className={`nav_main${isOpen ? ' nav_main_show' : ''}`}>
				{children}
			</div>
			<div onClick={() => setIsOpen(false)} className={`nav_overlay${isOpen ? ' nav_overlay_show' : ''}`}/>
		</div>
	)
}