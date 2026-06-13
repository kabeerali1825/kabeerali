import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';
import Logo from '../reusable/Logo';

const navLinks = [
	{ to: 'about', label: 'About' },
	{ to: 'experience', label: 'Experience' },
	{ to: 'skills', label: 'Skills' },
	{ to: 'projects', label: 'Projects' },
	{ to: 'contact', label: 'Contact' },
];

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	function toggleMenu() {
		setShowMenu((prev) => !prev);
	}

	function showHireMeModal() {
		const html = document.getElementsByTagName('html')[0];
		if (!showModal) {
			html.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			html.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	const linkClass =
		'cursor-pointer font-general-medium text-sm tracking-wide text-gray-200 hover:text-indigo-400 transition duration-300';

	return (
		<motion.nav
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
			id="nav"
			className={`fixed top-0 inset-x-0 z-40 transition duration-300 ${
				scrolled
					? 'bg-primary-dark/80 backdrop-blur-md border-b border-white/5 py-3'
					: 'bg-transparent py-5'
			}`}
		>
			<div className="container mx-auto px-4 sm:px-8 flex items-center justify-between">
				{/* Interactive wordmark logo → scroll to top */}
				<Logo />

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<ScrollLink
							key={link.to}
							to={link.to}
							smooth={true}
							duration={700}
							offset={-70}
							spy={true}
							activeClass="!text-indigo-400"
							className={linkClass}
						>
							{link.label}
						</ScrollLink>
					))}
				</div>

				{/* Right actions */}
				<div className="flex items-center gap-3">
					<span
						onClick={showHireMeModal}
						className="hidden sm:inline-block cursor-pointer font-general-medium text-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-5 py-2.5 transition duration-300"
						aria-label="Hire Me Button"
					>
						<Button title="Hire Me" />
					</span>

					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="cursor-pointer rounded-full bg-white/10 p-2.5 backdrop-blur"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-light text-lg" />
						) : (
							<FiSun className="text-yellow-300 text-lg" />
						)}
					</div>

					{/* Mobile hamburger */}
					<button
						onClick={toggleMenu}
						type="button"
						className="md:hidden text-gray-100 focus:outline-none p-1"
						aria-label="Menu"
					>
						{showMenu ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{showMenu && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					className="md:hidden bg-primary-dark/95 backdrop-blur-md border-t border-white/5"
				>
					<div className="flex flex-col gap-4 px-6 py-6">
						{navLinks.map((link) => (
							<ScrollLink
								key={link.to}
								to={link.to}
								smooth={true}
								duration={700}
								offset={-70}
								onClick={() => setShowMenu(false)}
								className={linkClass}
							>
								{link.label}
							</ScrollLink>
						))}
						<span
							onClick={() => {
								setShowMenu(false);
								showHireMeModal();
							}}
							className="cursor-pointer font-general-medium text-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-5 py-2.5 text-center w-32"
						>
							<Button title="Hire Me" />
						</span>
					</div>
				</motion.div>
			)}

			{/* Hire me modal */}
			{showModal && (
				<HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
			)}
		</motion.nav>
	);
};

export default AppHeader;
