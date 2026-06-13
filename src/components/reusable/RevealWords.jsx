import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

/**
 * Editorial word-by-word reveal: each word fades from muted to solid as the
 * paragraph scrolls into view (mirrors the reference's "lighting up" text).
 *
 * Props:
 *  - text:         the string to animate
 *  - className:    classes for the wrapping <p>
 *  - mutedClass:   color class for the not-yet-revealed state
 *  - solidClass:   color class once revealed
 *  - stagger:      seconds between each word (default 0.03)
 */
const RevealWords = ({
	text,
	className = '',
	mutedClass = 'text-gray-600',
	solidClass = 'text-white',
	stagger = 0.03,
}) => {
	const [ref, inView] = useInView({ once: true, threshold: 0.15 });
	const words = text.split(' ');

	return (
		<p ref={ref} className={className}>
			{words.map((word, i) => (
				<motion.span
					key={`${word}-${i}`}
					initial={false}
					animate={inView ? { opacity: 1 } : { opacity: 0.25 }}
					transition={{ duration: 0.4, delay: i * stagger }}
					className={`${inView ? solidClass : mutedClass} transition-colors duration-500`}
				>
					{word}{' '}
				</motion.span>
			))}
		</p>
	);
};

export default RevealWords;
