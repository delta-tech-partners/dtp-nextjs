export type TeamMember = {
    name: string;
    role: string;
    profileImage: string;
    profileUrl: string;
    headline: string;
    bio: string[];
    strengths: string[];
    clientQuestions: string[];
};

export const teamMembers: TeamMember[] = [
    {
        name: "O'Carson Fils",
        role: "Strategy & Product",
        profileImage: "https://avatars.githubusercontent.com/u/185424902?v=4",
        profileUrl: "https://www.linkedin.com/search/results/people/?keywords=O%27Carson%20Fils",
        headline: "Turns ambitious business goals into technical decisions owners can actually trust.",
        bio: [
            "O'Carson works closest to the client problem: where revenue is leaking, where teams are stuck, and where technology can create leverage without turning into a science project.",
            "He brings the operator's lens to discovery, roadmap sequencing, vendor conversations, and product judgment so owners can decide what to build, what to buy, and what to stop funding."
        ],
        strengths: [
            "Customer discovery and requirements shaping",
            "Product roadmap and ROI framing",
            "Vendor evaluation and stakeholder alignment",
            "Technical advocacy for non-technical owners"
        ],
        clientQuestions: [
            "Are we solving the right operational problem?",
            "Should this be a custom system, an integration, or a workflow change?",
            "How do we tie the roadmap to revenue, risk, or margin?"
        ]
    },
    {
        name: "Lisa Copeland",
        role: "Frontend Architecture & UX",
        profileImage: "https://avatars.githubusercontent.com/u/100307682?v=4",
        profileUrl: "https://www.linkedin.com/search/results/people/?keywords=Lisa%20Copeland",
        headline: "Makes complex workflows feel clear, credible, and usable for real teams.",
        bio: [
            "Lisa focuses on the moment where software either earns adoption or becomes another tab people avoid. She connects user experience, frontend architecture, accessibility, and design systems so operational tools feel polished without losing their practical edge.",
            "Her work is especially valuable when a company needs executive-grade interfaces, internal portals, dashboards, or AI-enabled workflows that users can trust under real pressure."
        ],
        strengths: [
            "Frontend architecture and modular design systems",
            "Workflow UX for data-heavy operational tools",
            "Accessibility, usability, and interface quality",
            "Product polish for investor, customer, and operator-facing systems"
        ],
        clientQuestions: [
            "Will the people doing the work actually use this?",
            "How do we make a complicated workflow feel obvious?",
            "What interface quality is needed for customers, investors, or leadership?"
        ]
    },
    {
        name: "Arsène I. Muhire",
        role: "Platforms & Infrastructure",
        profileImage: "https://avatars.githubusercontent.com/u/19325021?v=4",
        profileUrl: "https://www.linkedin.com/search/results/people/?keywords=Ars%C3%A8ne%20I.%20Muhire",
        headline: "Designs the systems layer: reliability, automation, observability, and scale.",
        bio: [
            "Arsène brings a platform engineering mindset to businesses that need their software to stop feeling fragile. He looks for the hidden constraints: brittle deployments, unclear data flow, missing telemetry, weak ownership boundaries, and infrastructure that cannot keep up with growth.",
            "His work turns technical debt into a modernization path, making systems easier to operate, easier to extend, and easier to govern as AI and automation become part of the workflow."
        ],
        strengths: [
            "Cloud architecture and backend modernization",
            "CI/CD, infrastructure automation, and release discipline",
            "Observability, performance, and resilience",
            "AI/data workflow integration with production guardrails"
        ],
        clientQuestions: [
            "Why does delivery slow down every time the product gets more important?",
            "What should be rebuilt, wrapped, retired, or monitored first?",
            "How do we make AI systems production-grade instead of demo-grade?"
        ]
    }
];