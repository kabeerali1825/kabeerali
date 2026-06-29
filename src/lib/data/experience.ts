import type { Experience } from '$lib/types';

/**
 * Work history, newest first. Edit here to update the timeline.
 */
export const experience: Experience[] = [
	{
		role: 'Software Engineer',
		company: 'Strategic Systems International',
		location: 'Hybrid',
		start: '03/2026',
		end: 'Present',
		highlights: [
			'Re-architected legacy systems and modernized Azure architecture with new services for better scalability and maintainability.',
			'Cut API query load by 60–80% by eliminating EF Core inefficiencies across critical endpoints.',
			'Built and deployed 10+ scalable ASP.NET Core Web APIs on Azure App Service with CI/CD pipelines.',
			'Added async processing (background jobs + real-time updates) for large report exports, eliminating timeouts.'
		],
		tech: ['.NET Core', 'Azure', 'Azure Functions', 'Service Bus', 'CI/CD']
	},
	{
		role: 'Software Engineer',
		company: 'Microsoft',
		location: 'Contract through LTS · Remote',
		start: '07/2024',
		end: '03/2026',
		highlights: [
			'Collaborated with multiple Microsoft FTE teams on Contact Enrichment Services, Cascade Routing, and ISV solutions.',
			'Delivered 30+ Service 360 deliverables across multiple sprints and reviewed 150+ pull requests.',
			'Shipped 200+ production deployments via Azure DevOps CI/CD, reducing downtime.',
			'Raised unit test coverage from 76% to 90% and built conversational AI chatbots with Azure OpenAI.'
		],
		tech: ['.NET Core', 'Azure OpenAI', 'AKS', 'Azure DevOps', 'Cosmos DB']
	},
	{
		role: 'Software Engineer',
		company: 'Lumovy Technology Solutions',
		location: 'Hybrid',
		start: '07/2024',
		end: '03/2026',
		highlights: [
			'Worked as a Full-Stack Engineer with .NET / .NET Core, React, and Next.js.',
			'Built cloud integrations using Microsoft Azure and Azure DevOps.',
			'Delivered solutions for clients including Janie and Jack and Sysco.',
			'Worked on Microsoft Dynamics 365 CRM and Power Platform (Power Apps, Power Automate, Power BI).'
		],
		tech: ['React', 'Next.js', '.NET', 'Dynamics 365', 'Power Platform']
	}
];
