import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FiArrowDownCircle, FiGithub, FiLinkedin, FiUsers } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profile from '../../images/KabeerProfile.png';
import { statsData } from '../../data/statsData';

const HeroSection = () => {
	// Subtle parallax + fade on the hero image as the user begins scrolling.
	const { scrollY } = useViewportScroll();
	const imageY = useTransform(scrollY, [0, 600], [0, 120]);

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark"
		>
			{/* Ambient indigo glow */}
			<div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
			<div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />

			<div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center pt-32 pb-20">
				<div className="md:col-span-7 text-left">
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="font-general-medium inline-block text-indigo-400 tracking-[0.3em] uppercase text-xs sm:text-sm mb-6"
					>
						Full-Stack .NET Architect · SaaS &amp; Enterprise · Ex-Microsoft
					</motion.span>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="font-general-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-white"
					>
						Kabeer Ali
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.35 }}
						className="font-general-medium mt-6 max-w-xl text-lg sm:text-2xl leading-snug text-gray-400"
					>
						Full-Stack{' '}
						<span className="text-gray-100">.NET, Azure &amp; AI</span> developer
						building cloud-native, scalable, and secure{' '}
						<span className="text-gray-100">enterprise systems</span> for SaaS.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="mt-9 flex flex-wrap items-center gap-3"
					>
						<Link
							to="contact"
							smooth={true}
							duration={700}
							offset={-70}
							className="font-general-medium cursor-pointer rounded-full bg-indigo-500 px-7 py-3 text-white shadow-lg shadow-indigo-900/40 hover:bg-indigo-600 hover:-translate-y-0.5 transition duration-300"
						>
							Get in Touch
						</Link>
						<a
							download="Kabeer-Ali-Resume.pdf"
							href="/files/Kabeer-Ali-Resume.pdf"
							className="font-general-medium flex items-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-gray-200 hover:border-indigo-400 hover:text-white transition duration-300"
							aria-label="Download Resume"
						>
							<FiArrowDownCircle className="h-5 w-5" />
							Resume
						</a>
						<a
							href="https://topmate.io/kabeer_ali"
							target="_blank"
							rel="noreferrer"
							className="font-general-medium flex items-center gap-2 rounded-full border border-gray-600 px-6 py-3 text-gray-200 hover:border-indigo-400 hover:text-white transition duration-300"
							aria-label="Book a session on Topmate"
						>
							<FiUsers className="h-5 w-5" />
							Topmate
						</a>
						<a
							href="https://github.com/kabeerali1825"
							target="_blank"
							rel="noreferrer"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:border-indigo-400 hover:text-white transition duration-300"
							aria-label="GitHub"
						>
							<FiGithub className="h-5 w-5" />
						</a>
						<a
							href="https://www.linkedin.com/in/kabeer-ali18/"
							target="_blank"
							rel="noreferrer"
							className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 text-gray-200 hover:border-indigo-400 hover:text-white transition duration-300"
							aria-label="LinkedIn"
						>
							<FiLinkedin className="h-5 w-5" />
						</a>
					</motion.div>

					{/* Headline stats */}
					<div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
						{statsData.map((stat, i) => (
							<motion.div
								key={stat.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
								className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 hover:border-indigo-400/40 transition duration-300"
							>
								<div className={`font-general-semibold text-2xl sm:text-3xl ${stat.color}`}>
									{stat.value}
								</div>
								<div className="font-general-regular mt-1 text-[11px] uppercase tracking-wider text-gray-500">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					style={{ y: imageY }}
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
					className="md:col-span-5 flex justify-center md:justify-end"
				>
					<div className="relative">
						<div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-indigo-500/40 to-transparent blur-xl" />
						<img
							src={profile}
							alt="Kabeer Ali"
							className="relative w-64 sm:w-80 lg:w-96 rounded-3xl object-cover grayscale hover:grayscale-0 transition duration-700"
						/>
					</div>
				</motion.div>
			</div>

			{/* Scroll cue */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<Link
					to="about"
					smooth={true}
					duration={700}
					offset={-70}
					className="flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-indigo-400 transition"
				>
					<span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
					<motion.span
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
						className="block h-10 w-px bg-current"
					/>
				</Link>
			</motion.div>
		</section>
	);
};

export default HeroSection;
