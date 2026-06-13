import { motion, useViewportScroll, useSpring } from 'framer-motion';

/**
 * Thin indigo progress bar pinned to the top of the viewport that fills as the
 * user scrolls the page — a subtle, modern "you are here" cue.
 */
const ScrollProgress = () => {
	const { scrollYProgress } = useViewportScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<motion.div
			style={{ scaleX }}
			className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-indigo-500"
		/>
	);
};

export default ScrollProgress;
