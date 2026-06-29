import type { SkillCategory } from '$lib/types';

export const skills: SkillCategory[] = [
	{
		name: 'Backend & APIs',
		skills: [
			{ name: '.NET / ASP.NET Core', level: 95 },
			{ name: 'C#', level: 93 },
			{ name: 'Entity Framework Core', level: 90 },
			{ name: 'RESTful API Development', level: 92 },
			{ name: 'Microservices Architecture', level: 85 }
		]
	},
	{
		name: 'Frontend',
		skills: [
			{ name: 'React.js', level: 90 },
			{ name: 'Next.js', level: 85 },
			{ name: 'TypeScript', level: 90 },
			{ name: 'Tailwind CSS', level: 85 }
		]
	},
	{
		name: 'Cloud & DevOps',
		skills: [
			{ name: 'Microsoft Azure', level: 92 },
			{ name: 'Azure DevOps (CI/CD)', level: 90 },
			{ name: 'Docker / AKS', level: 80 },
			{ name: 'Azure OpenAI', level: 80 }
		]
	},
	{
		name: 'Databases & Search',
		skills: [
			{ name: 'Azure SQL / SQL Server', level: 88 },
			{ name: 'Azure Cosmos DB', level: 85 },
			{ name: 'PostgreSQL', level: 85 },
			{ name: 'Redis', level: 78 },
			{ name: 'Azure AI Search', level: 75 }
		]
	},
	{
		name: 'Messaging, Queues & Communication',
		skills: [
			{ name: 'Azure Service Bus', level: 85 },
			{ name: 'Azure Storage Queues', level: 82 },
			{ name: 'Pub/Sub Patterns', level: 80 },
			{ name: 'RESTful APIs', level: 90 }
		]
	},
	{
		name: 'Business Apps & Tools',
		skills: [
			{ name: 'Power Platform', level: 88 },
			{ name: 'Dynamics 365 CRM', level: 85 },
			{ name: 'Git / GitHub', level: 92 }
		]
	}
];
