import { motion } from 'framer-motion';
import { experienceData } from '../../data/experienceData';
import Reveal from '../reusable/Reveal';
import useInView from '../../hooks/useInView';

const ExperienceCard = ({ job, index }) => {
	const [ref, inView] = useInView({ once: true, threshold: 0.15 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeInOut' }}
			className="relative pl-10 sm:pl-14 pb-12 last:pb-0"
		>
			{/* Timeline line + node */}
			<span className="absolute left-[7px] sm:left-[11px] top-2 bottom-0 w-px bg-gray-200 dark:bg-ternary-dark" />
			<span
				className={`absolute left-0 top-1.5 flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full ${
					job.current ? 'bg-indigo-500' : 'bg-gray-300 dark:bg-ternary-dark'
				}`}
			>
				{job.current && (
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
				)}
				<span className="h-1.5 w-1.5 rounded-full bg-white" />
			</span>

			<div className="rounded-2xl border border-gray-200 dark:border-ternary-dark bg-secondary-light dark:bg-ternary-dark p-6 sm:p-8 hover:border-indigo-400/50 transition duration-300">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
					<h3 className="font-general-semibold text-xl sm:text-2xl text-ternary-dark dark:text-primary-light">
						{job.role}{' '}
						<span className="text-indigo-500 dark:text-indigo-400">
							@ {job.company}
						</span>
					</h3>
					<span className="font-general-medium text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
						{job.period}
					</span>
				</div>
				<span className="font-general-regular text-sm text-gray-400 dark:text-gray-500">
					{job.location}
				</span>

				<ul className="mt-5 space-y-3">
					{job.highlights.map((point, i) => (
						<li
							key={i}
							className="font-general-regular flex gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
						>
							<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-indigo-400" />
							{point}
						</li>
					))}
				</ul>

				<div className="mt-6 flex flex-wrap gap-2">
					{job.tech.map((t) => (
						<span
							key={t}
							className="font-general-medium rounded-full bg-indigo-50 dark:bg-primary-dark px-3 py-1 text-xs text-indigo-600 dark:text-indigo-300"
						>
							{t}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const ExperienceSection = () => {
	return (
		<section
			id="experience"
			className="bg-primary-light dark:bg-secondary-dark py-24 sm:py-32"
		>
			<div className="container mx-auto px-4 sm:px-8">
				<Reveal className="flex items-center justify-between border-b border-gray-200 dark:border-ternary-dark pb-5">
					<span className="font-general-medium tracking-[0.25em] uppercase text-xs sm:text-sm text-indigo-500 dark:text-indigo-400">
						Where I've worked
					</span>
					<span className="font-general-medium text-sm text-gray-400 dark:text-gray-500">
						(02)
					</span>
				</Reveal>

				<Reveal
					delay={0.1}
					className="mt-10 mb-14 max-w-3xl font-general-semibold text-3xl sm:text-5xl leading-tight text-ternary-dark dark:text-primary-light"
				>
					Building enterprise systems{' '}
					<span className="text-indigo-500 dark:text-indigo-400">
						with Microsoft &amp; global teams.
					</span>
				</Reveal>

				<div className="mt-4">
					{experienceData.map((job, index) => (
						<ExperienceCard key={job.id} job={job} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
