import { aboutMeData } from '../../data/aboutMeData';
import Reveal from '../reusable/Reveal';
import RevealWords from '../reusable/RevealWords';

const AboutSection = () => {
	return (
		<section
			id="about"
			className="bg-secondary-light dark:bg-primary-dark py-24 sm:py-32"
		>
			<div className="container mx-auto px-4 sm:px-8">
				<Reveal className="flex items-center justify-between border-b border-gray-200 dark:border-ternary-dark pb-5">
					<span className="font-general-medium tracking-[0.25em] uppercase text-xs sm:text-sm text-indigo-500 dark:text-indigo-400">
						How I help founders
					</span>
					<span className="font-general-medium text-sm text-gray-400 dark:text-gray-500">
						(01)
					</span>
				</Reveal>

				<div className="mt-12 max-w-5xl">
					<RevealWords
						text={aboutMeData[0].bio}
						className="font-general-medium text-2xl sm:text-3xl lg:text-4xl leading-snug"
						mutedClass="text-gray-300 dark:text-gray-700"
						solidClass="text-ternary-dark dark:text-primary-light"
						stagger={0.012}
					/>
				</div>

				<Reveal
					delay={0.2}
					className="mt-12 max-w-3xl font-general-regular text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400"
				>
					{aboutMeData[1].bio}
				</Reveal>
			</div>
		</section>
	);
};

export default AboutSection;
