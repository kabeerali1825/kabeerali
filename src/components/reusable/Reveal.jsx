import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

/**
 * Scroll-triggered reveal. Fades + slides children in when they enter the viewport.
 * The default interactive building block for the one-pager.
 *
 * Props:
 *  - delay:      stagger offset in seconds (e.g. index * 0.08)
 *  - y:          initial vertical offset in px (default 40)
 *  - duration:   animation duration (default 0.7)
 *  - once:       only animate the first time it enters view (default true)
 *  - as:         element/component to render (default motion.div)
 *  - className:  passthrough classes
 */
const Reveal = ({
	children,
	delay = 0,
	y = 40,
	duration = 0.7,
	once = true,
	className = '',
	...rest
}) => {
	const [ref, inView] = useInView({ once });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
			transition={{ ease: 'easeInOut', duration, delay }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
