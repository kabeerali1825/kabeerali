// Skills grouped into categories, each item backed by a real logo image.
import DotNet from '../images/StackLang/DotNET.png';
import ReactLogo from '../images/StackLang/React.png';
import Next from '../images/StackLang/Next.png';
import Redux from '../images/StackLang/Redux.png';
import TS from '../images/StackLang/TS.png';
import Azure from '../images/StackLang/Azure.png';
import AzureDevOps from '../images/StackLang/Azure DevOps.png';
import AWS from '../images/StackLang/AWS.png';
import Docker from '../images/StackLang/Docker.svg';
import Integration from '../images/StackLang/Integration.png';
import PostGreSql from '../images/StackLang/PostGreSQL.png';
import Mongo from '../images/StackLang/MongoDB.png';
import Powerplatform from '../images/StackLang/Microsoft-Power-Platform.png';
import D365 from '../images/StackLang/D365.png';
import Git from '../images/StackLang/Git.png';

export const skillsHeading = 'Skills';

export const skillsData = [
	{
		id: 1,
		title: 'Languages & Frameworks',
		accent: 'indigo',
		items: [
			{ name: '.NET / .NET Core', img: DotNet },
			{ name: 'TypeScript', img: TS },
			{ name: 'React.js', img: ReactLogo },
			{ name: 'Next.js', img: Next },
			{ name: 'Redux Toolkit', img: Redux },
		],
	},
	{
		id: 2,
		title: 'Cloud & DevOps',
		accent: 'cyan',
		items: [
			{ name: 'Microsoft Azure', img: Azure },
			{ name: 'Azure DevOps', img: AzureDevOps },
			{ name: 'Azure Integration', img: Integration },
			{ name: 'Docker', img: Docker },
			{ name: 'AWS', img: AWS },
		],
	},
	{
		id: 3,
		title: 'Databases',
		accent: 'emerald',
		items: [
			{ name: 'PostgreSQL', img: PostGreSql },
			{ name: 'MongoDB', img: Mongo },
		],
	},
	{
		id: 4,
		title: 'Business Apps & Tools',
		accent: 'amber',
		items: [
			{ name: 'Power Platform', img: Powerplatform },
			{ name: 'Dynamics 365', img: D365 },
			{ name: 'Git / GitHub', img: Git },
		],
	},
];
