import { useEffect, useRef, useState } from 'react';

/**
 * IntersectionObserver-based in-view detection.
 * framer-motion@4 has no `whileInView`/`useInView`, so we roll our own (zero deps).
 *
 * @param {{ once?: boolean, threshold?: number, rootMargin?: string }} options
 * @returns {[React.RefObject, boolean]} ref to attach + whether it's in view
 */
const useInView = ({ once = true, threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) => {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node || typeof IntersectionObserver === 'undefined') {
			// Graceful fallback: show content if observer unavailable.
			setInView(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					if (once) observer.unobserve(node);
				} else if (!once) {
					setInView(false);
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [once, threshold, rootMargin]);

	return [ref, inView];
};

export default useInView;
