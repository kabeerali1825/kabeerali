import ContactDetails from '../contact/ContactDetails';
import ContactForm from '../contact/ContactForm';
import Reveal from '../reusable/Reveal';

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="bg-secondary-light dark:bg-primary-dark py-24 sm:py-32"
		>
			<div className="container mx-auto px-4 sm:px-8">
				<Reveal className="flex items-center justify-between border-b border-gray-200 dark:border-ternary-dark pb-5">
					<span className="font-general-medium tracking-[0.25em] uppercase text-xs sm:text-sm text-indigo-500 dark:text-indigo-400">
						Let's build together
					</span>
					<span className="font-general-medium text-sm text-gray-400 dark:text-gray-500">
						(05)
					</span>
				</Reveal>

				<Reveal
					delay={0.1}
					className="mt-10 max-w-3xl font-general-semibold text-3xl sm:text-5xl leading-tight text-ternary-dark dark:text-primary-light"
				>
					Have a project in mind?{' '}
					<span className="text-indigo-500 dark:text-indigo-400">
						Let's talk.
					</span>
				</Reveal>

				<Reveal delay={0.15} className="mt-12 flex flex-col lg:flex-row gap-4">
					<ContactDetails />
					<ContactForm />
				</Reveal>
			</div>
		</section>
	);
};

export default ContactSection;
