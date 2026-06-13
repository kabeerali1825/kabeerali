import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projectsData } from '../../data/projects';
import Reveal from '../reusable/Reveal';
import useInView from '../../hooks/useInView';

const ProjectCard = ({ project, index }) => {
	const [ref, inView] = useInView({ once: true, threshold: 0.15 });
	const isLink = Boolean(project.url);
	const Wrapper = isLink ? motion.a : motion.article;
	const linkProps = isLink
		? { href: project.url, target: '_blank', rel: 'noreferrer' }
		: {};

	return (
		<Wrapper
			ref={ref}
			{...linkProps}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: 'easeInOut' }}
			className="group relative block overflow-hidden rounded-2xl border border-gray-200 dark:border-ternary-dark bg-secondary-light dark:bg-ternary-dark"
		>
			<div className="overflow-hidden">
				<img
					src={project.img}
					alt={project.title}
					className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
				/>
			</div>
			<div className="p-6 sm:p-8">
				<span className="font-general-medium text-xs tracking-wider uppercase text-indigo-500 dark:text-indigo-400">
					{project.category}
				</span>
				<h3 className="font-general-semibold mt-3 text-xl sm:text-2xl text-ternary-dark dark:text-primary-light leading-snug">
					{project.title}
				</h3>
			</div>
			<div
				className={`absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full text-white backdrop-blur transition duration-300 ${
					isLink
						? 'bg-indigo-500/80 opacity-100'
						: 'bg-white/10 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
				}`}
			>
				<FiArrowUpRight className="h-5 w-5" />
			</div>
		</Wrapper>
	);
};

const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className="bg-secondary-light dark:bg-primary-dark py-24 sm:py-32"
		>
			<div className="container mx-auto px-4 sm:px-8">
				<Reveal className="flex items-center justify-between border-b border-gray-200 dark:border-ternary-dark pb-5">
					<span className="font-general-medium tracking-[0.25em] uppercase text-xs sm:text-sm text-indigo-500 dark:text-indigo-400">
						Selected Work
					</span>
					<span className="font-general-medium text-sm text-gray-400 dark:text-gray-500">
						(04)
					</span>
				</Reveal>

				<Reveal
					delay={0.1}
					className="mt-10 mb-14 max-w-3xl font-general-semibold text-3xl sm:text-5xl leading-tight text-ternary-dark dark:text-primary-light"
				>
					Enterprise-grade products shipped for{' '}
					<span className="text-indigo-500 dark:text-indigo-400">
						Microsoft &amp; global teams.
					</span>
				</Reveal>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{projectsData.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
