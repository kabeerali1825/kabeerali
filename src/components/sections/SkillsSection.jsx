import { motion } from 'framer-motion';
import { skillsData, skillsHeading } from '../../data/skillsData';
import Reveal from '../reusable/Reveal';
import useInView from '../../hooks/useInView';

// Literal class strings per accent so the precompiled Tailwind picks them up.
const accentMap = {
	indigo: { bar: 'bg-indigo-500', label: 'text-indigo-500 dark:text-indigo-400', hover: 'hover:border-indigo-400' },
	cyan: { bar: 'bg-cyan-500', label: 'text-cyan-600 dark:text-cyan-400', hover: 'hover:border-cyan-400' },
	emerald: { bar: 'bg-emerald-500', label: 'text-emerald-600 dark:text-emerald-400', hover: 'hover:border-emerald-400' },
	amber: { bar: 'bg-amber-500', label: 'text-amber-600 dark:text-amber-400', hover: 'hover:border-amber-400' },
};

const CategoryCard = ({ category, index }) => {
	const [ref, inView] = useInView({ once: true, threshold: 0.15 });
	const accent = accentMap[category.accent] || accentMap.indigo;

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 40 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
			transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: 'easeInOut' }}
			className="rounded-2xl border border-gray-200 dark:border-ternary-dark bg-secondary-light dark:bg-ternary-dark p-6 sm:p-8"
		>
			<div className="flex items-center gap-3 mb-6">
				<span className={`h-5 w-1 rounded-full ${accent.bar}`} />
				<h3 className={`font-general-semibold text-lg sm:text-xl ${accent.label}`}>
					{category.title}
				</h3>
			</div>

			<div className="flex flex-wrap gap-3">
				{category.items.map((item) => (
					<span
						key={item.name}
						className={`group flex cursor-default items-center gap-2.5 rounded-xl border border-gray-200 dark:border-primary-dark bg-primary-light dark:bg-primary-dark px-3.5 py-2.5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.hover}`}
					>
						<img
							src={item.img}
							alt={item.name}
							className="h-6 w-6 object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
						/>
						<span className="font-general-medium text-sm text-ternary-dark dark:text-ternary-light whitespace-nowrap">
							{item.name}
						</span>
					</span>
				))}
			</div>
		</motion.div>
	);
};

const SkillsSection = () => {
	return (
		<section
			id="skills"
			className="bg-primary-light dark:bg-secondary-dark py-24 sm:py-32"
		>
			<div className="container mx-auto px-4 sm:px-8">
				<Reveal className="flex items-center justify-between border-b border-gray-200 dark:border-ternary-dark pb-5">
					<span className="font-general-medium tracking-[0.25em] uppercase text-xs sm:text-sm text-indigo-500 dark:text-indigo-400">
						{skillsHeading}
					</span>
					<span className="font-general-medium text-sm text-gray-400 dark:text-gray-500">
						(03)
					</span>
				</Reveal>

				<Reveal
					delay={0.1}
					className="mt-10 mb-14 max-w-3xl font-general-semibold text-3xl sm:text-5xl leading-tight text-ternary-dark dark:text-primary-light"
				>
					The technologies I{' '}
					<span className="text-indigo-500 dark:text-indigo-400">
						build with every day.
					</span>
				</Reveal>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
					{skillsData.map((category, index) => (
						<CategoryCard key={category.id} category={category} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
