import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hoverButtonClass, gradientHoverTextClass } from '../styles/classNames'
import { Menu, X } from 'lucide-react' // for hamburger icon

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	const links = [
		{ label: 'Home', path: '/Home' },
		{ label: 'Upload', path: '/Upload' },
		{ label: 'Instructions', path: '/Instructions' },
		{ label: 'Documentation', path: '/Documentation' },
		{ label: 'About Me', path: '/AboutMe' },
	]

	return (
		<header className="relative text-black font-inter flex items-center justify-between">
			<div className={gradientHoverTextClass}>
				<Link to="/Home">NameMyDoc</Link>
			</div>

			{/* Hamburger for mobile */}
			<button className="md:hidden cursor-pointer" onClick={toggleMenu}>
				{isOpen ? <X size={28} /> : <Menu size={28} />}
			</button>

			{/* Desktop menu */}
			<nav className="hidden md:flex space-x-6">
				{links.map(link => (
					<Link key={link.path} to={link.path} className="relative group">
						<span>{link.label}</span>
						<span className={hoverButtonClass}></span>
					</Link>
				))}
			</nav>

			{/* Mobile dropdown */}
			{isOpen && (
				<div className="absolute top-full left-0 right-0 bg-white z-20 flex flex-col items-center py-4 space-y-4 md:hidden">
					{links.map(link => (
						<Link
							key={link.path}
							to={link.path}
							className="relative group"
							onClick={closeMenu}
						>
							<span>{link.label}</span>
							<span className={hoverButtonClass}></span>
						</Link>
					))}
				</div>
			)}
		</header>
	)
}

export default Header
