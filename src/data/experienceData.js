// Professional experience, most recent first (from resume).
export const experienceData = [
	{
		id: 1,
		role: 'Software Engineer',
		company: 'Strategic Systems International',
		period: 'Mar 2026 – Present',
		location: 'On-site',
		current: true,
		highlights: [
			'Re-architected legacy systems and modernized Azure architecture with new services for better scalability and maintainability.',
			'Cut API query load by 60–80% by eliminating EF Core inefficiencies across critical endpoints.',
			'Built and deployed 10+ scalable ASP.NET Core Web APIs on Azure App Service with CI/CD pipelines.',
			'Added async processing (background jobs + real-time updates) for large report exports, eliminating timeouts.',
		],
		tech: ['.NET Core', 'Azure', 'Azure Functions', 'Service Bus', 'CI/CD'],
	},
	{
		id: 2,
		role: 'Software Engineer',
		company: 'Microsoft',
		period: 'Jul 2024 – Mar 2026',
		location: 'Contract through LTS · Remote',
		current: false,
		highlights: [
			'Collaborated with multiple Microsoft FTE teams on Contact Enrichment Services, Cascade Routing, and ISV solutions.',
			'Delivered 30+ Service 360 deliverables across multiple sprints and reviewed 150+ pull requests.',
			'Shipped 200+ production deployments via Azure DevOps CI/CD, reducing downtime.',
			'Raised unit test coverage from 76% to 90% and built conversational AI chatbots with Azure OpenAI.',
		],
		tech: ['.NET Core', 'Azure OpenAI', 'AKS', 'Azure DevOps', 'Cosmos DB'],
	},
	{
		id: 3,
		role: 'Software Engineer',
		company: 'Lumovy Technology Solutions',
		period: 'Jul 2024 – Mar 2026',
		location: 'Hybrid',
		current: false,
		highlights: [
			'Worked as a Full-Stack Engineer with .NET / .NET Core, React, and Next.js.',
			'Built cloud integrations using Microsoft Azure and Azure DevOps.',
			'Delivered solutions for clients including Janie and Jack and Sysco.',
			'Worked on Microsoft Dynamics 365 CRM and Power Platform (Power Apps, Power Automate, Power BI).',
		],
		tech: ['React', 'Next.js', '.NET', 'Dynamics 365', 'Power Platform'],
	},
];
