import ScrollProgress from '../components/reusable/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
	return (
		<div className="w-full overflow-x-hidden">
			<ScrollProgress />
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
};

export default Home;
