import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

/**
 * Interactive wordmark logo. A gradient "KA" monogram that tilts and brightens on
 * hover, paired with the "Kabeer Ali." wordmark whose period pulses in indigo.
 * Replaces the old static image logo. Clicking scrolls back to the hero.
 */
const Logo = () => {
	return (
		<ScrollLink
			to="hero"
			smooth={true}
			duration={700}
			className="group flex cursor-pointer items-center gap-2.5 select-none"
			aria-label="Kabeer Ali — back to top"
		>
			<motion.span
				whileHover={{ rotate: -8, scale: 1.08 }}
				transition={{ type: 'spring', stiffness: 300, damping: 15 }}
				className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-400 shadow-lg shadow-indigo-900/40"
			>
				<span className="font-general-semibold text-sm text-white tracking-tight">
					KA
				</span>
				{/* sheen sweep on hover */}
				<span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
					<span className="absolute -left-6 top-0 h-full w-5 -skew-x-12 bg-white/30 blur-[2px] transition-all duration-700 group-hover:left-12" />
				</span>
			</motion.span>

			{/* The nav always sits on a dark backdrop (transparent over the dark hero,
			    dark-translucent when scrolled), so the wordmark stays light in both themes. */}
			<span className="font-general-semibold text-lg leading-none tracking-tight text-white">
				Kabeer
				<span className="ml-1 text-indigo-400">Ali</span>
				<motion.span
					animate={{ opacity: [1, 0.3, 1] }}
					transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
					className="text-indigo-400"
				>
					.
				</motion.span>
			</span>
		</ScrollLink>
	);
};

export default Logo;
