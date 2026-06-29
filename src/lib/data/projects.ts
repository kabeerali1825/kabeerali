import type { Project } from '$lib/types';

/**
 * SINGLE SOURCE OF TRUTH for all projects.
 *
 * To add a project:
 *   1. Append a new object below.
 *   2. Drop its images in `static/projects/<slug>/` and reference them here.
 *      `cover` is the card thumbnail; `images` is the gallery shown in the modal.
 *
 * Tip: add `links.repo` / `links.live` once URLs are available.
 */
export const projects: Project[] = [
	{
		slug: 'ces',
		title: 'Microsoft Contact Enrichment Services',
		tagline: '.NET / Azure / React modernization of Microsoft CES',
		description: `Modernized Microsoft's Contact Enrichment Services (CES) by upgrading legacy Azure
WebJobs (GDPR, CDQS) from .NET Framework 4.7.2 to modern .NET Core, integrating Azure Service Bus,
Cosmos DB, and Azure SQL for efficient data handling. Introduced OpenTelemetry for distributed
tracing and service auditing, hardened authentication with Azure Managed Identity, and integrated
Microsoft IcM and Security Tracking (S360) for diagnostics and compliance across services.`,
		tags: ['.NET', 'Azure', 'React'],
		cover: '/projects/ces/cover.png',
		images: ['/projects/ces/cover.png', '/projects/ces/1.png', '/projects/ces/2.png'],
		links: { live: 'https://www.microsoft.com/en-pk/' },
		featured: true,
		year: 2025
	},
	{
		slug: 'cascade-routing',
		title: 'Microsoft Cascade Routing',
		tagline: 'Locale detection platform on .NET, React & Power Platform',
		description: `Built a scalable, automated locale detection and routing platform for Microsoft
combining low-code Power Platform tools with full-stack .NET + React.js. Phase one delivered Canvas
Apps and Power Automate flows synchronizing data across Dynamics 365 CRM, extended securely via Azure
Logic Apps and Functions. Phase two delivered responsive React.js + TypeScript UI backed by .NET Core
Web APIs, deployed through Azure DevOps pipelines — improving localization accuracy and scalability.`,
		tags: ['.NET', 'Azure', 'Power Platform', 'React'],
		cover: '/projects/cascade-routing/cover.png',
		images: [
			'/projects/cascade-routing/cover.png',
			'/projects/cascade-routing/1.png',
			'/projects/cascade-routing/2.png'
		],
		links: { live: 'https://www.microsoft.com/en-pk/' },
		featured: true,
		year: 2024
	},
	{
		slug: 'microsoft-stores',
		title: 'Microsoft Stores Platform',
		tagline: 'Globalized commerce platform on .NET, Azure & React',
		description: `Contributed as a Full-Stack Developer to the Microsoft Stores ecosystem — a highly
responsive, scalable web platform letting users worldwide purchase games, PCs, and software based on
their region, language, and currency. Built React.js + TypeScript UI and .NET Core APIs, integrated
Azure SQL for product/order storage, Azure Blob for media, and Azure DevOps CI/CD, with secure
authentication and payment flows for Microsoft's global commerce needs.`,
		tags: ['.NET', 'Azure', 'React'],
		cover: '/projects/microsoft-stores/cover.png',
		images: [
			'/projects/microsoft-stores/cover.png',
			'/projects/microsoft-stores/1.png',
			'/projects/microsoft-stores/2.png'
		],
		links: { live: 'https://www.microsoft.com/en-pk/' },
		featured: true,
		year: 2024
	},
	{
		slug: 'isv',
		title: 'Microsoft ISV',
		tagline: 'AppSource validation & Sandbox Licensing for Microsoft ISVs',
		description: `Delivered a secure solution for validating and managing AppSource packages and
investigating the Sandbox Licensing Portal to improve partner engagement and deployment for Microsoft
ISVs. Validated and deployed packages using Microsoft Package Deployer and PAC CLI, guided global
partners through validation workflows, and documented sandbox functionality and security behavior to
streamline licensing operations — all to Microsoft ISV quality and compliance standards.`,
		tags: ['.NET', 'Azure', 'Power Platform'],
		cover: '/projects/isv/cover.jpeg',
		images: ['/projects/isv/cover.jpeg', '/projects/isv/1.png', '/projects/isv/2.jpeg'],
		links: { live: 'https://partner.microsoft.com/en-US/' },
		featured: false,
		year: 2024
	},
	{
		slug: 'alcon',
		title: 'Alcon – Resource Allocation App',
		tagline: 'Resource management on Power Platform & Dynamics 365 CRM',
		description: `Led implementation of a scalable resource allocation management system on Microsoft
Dynamics 365 CRM and Power Platform. Built automated Power Automate workflows for approval and
assignment, designed a flexible Dataverse data model for real-time resource tracking, and developed
.NET plugins for custom validations and business logic. Delivered detailed Power BI dashboards giving
management clear insight into resource utilization and availability.`,
		tags: ['.NET', 'Power Platform', 'Dynamics 365'],
		cover: '/projects/alcon/cover.png',
		images: ['/projects/alcon/cover.png', '/projects/alcon/1.png'],
		links: {},
		featured: false,
		year: 2024
	},
	{
		slug: 'pos',
		title: 'Point of Sales System',
		tagline: 'Cloud-native POS backend on .NET & Azure',
		description: `Implemented a fully cloud-native, secure Point of Sales (POS) backend with scalable
REST APIs in .NET Core. Integrated Azure Active Directory with bearer-token authentication for
fine-grained, role-based access, secured secrets and connection strings in Azure Key Vault, and used
Cosmos DB for high-performance real-time access to product and transaction data across a multi-branch
system. Contributed a React.js frontend and maintained secure-coding and performance best practices.`,
		tags: ['.NET', 'Azure'],
		cover: '/projects/pos/cover.png',
		images: ['/projects/pos/cover.png'],
		links: {},
		featured: false,
		year: 2024
	},
	{
		slug: 'continental',
		title: 'Continental Luxe Hosting',
		tagline: 'Luxury web platform on Next.js & React',
		description: `A luxury hosting web platform built with Next.js and React, delivering a polished,
high-performance marketing and booking experience with a refined, responsive UI.`,
		tags: ['Next.js', 'React'],
		cover: '/projects/continental/cover.svg',
		images: ['/projects/continental/cover.svg'],
		links: { live: 'https://continentalluxehosting.com/' },
		featured: false,
		year: 2024
	}
];

/** Projects shown on the home page. Falls back to the first 3 if none are flagged. */
export const featuredProjects: Project[] = projects.some((p) => p.featured)
	? projects.filter((p) => p.featured)
	: projects.slice(0, 3);

/** All unique tags across projects, for the filter UI. */
export const projectTags: string[] = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
