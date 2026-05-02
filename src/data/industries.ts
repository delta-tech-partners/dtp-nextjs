import type { LucideIcon } from "lucide-react";
import {
    Activity,
    BadgeDollarSign,
    Bot,
    BrainCircuit,
    Briefcase,
    Building2,
    ChartNoAxesCombined,
    ClipboardCheck,
    Factory,
    FileSearch,
    HeartPulse,
    Hotel,
    KeyRound,
    LineChart,
    LockKeyhole,
    Network,
    ShieldCheck,
    Sparkles,
    Stethoscope,
    Store,
    Users,
    Utensils,
    Workflow,
    Wrench,
} from "lucide-react";

type MetadataConfig = {
    title: string;
    description: string;
};

type IndustryTheme = {
    accent: string;
    accentStrong: string;
    panel: string;
    border: string;
    muted: string;
};

type IconContent = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type IndustryPageConfig = {
    slug: string;
    navLabel: string;
    metadata: MetadataConfig;
    theme: IndustryTheme;
    hero: {
        headline: string;
        body: string;
        primaryCta: string;
        secondaryCta: string;
        image: string;
        imagePosition: string;
        icon: LucideIcon;
        insightTitle: string;
        insightBody: string;
        badges: string[];
    };
    value: {
        headline: string;
        body: string;
        pillars: IconContent[];
    };
    systems: {
        headline: string;
        body: string;
        stackTags: string[];
        bullets: string[];
    };
    useCases: {
        eyebrow: string;
        headline: string;
        body: string;
        cards: IconContent[];
    };
    finalCta: {
        eyebrow: string;
        headline: string;
        body: string;
        label: string;
    };
};

// Add a new industry here; the dynamic route and navigation will pick it up automatically.
export const industries: IndustryPageConfig[] = [
    {
        slug: "real-estate",
        navLabel: "Real Estate",
        metadata: {
            title: "Real Estate Technology Services | Delta Tech Partners",
            description:
                "AI-ready systems, proptech integration, agentic workflows, and custom software for real estate owners, developers, operators, and asset managers.",
        },
        theme: {
            accent: "#38bdf8",
            accentStrong: "#0284c7",
            panel: "rgba(8, 47, 73, 0.22)",
            border: "rgba(56, 189, 248, 0.28)",
            muted: "#7dd3fc",
        },
        hero: {
            headline: "AI-ready systems for real estate portfolios.",
            body:
                "Real estate leaders are being sold AI leasing assistants, lease abstraction, predictive maintenance, digital twins, portfolio analytics, and automated investor reporting. Delta Tech Partners helps owners, developers, and operators turn those ideas into working systems that connect to the tools, data, and decisions already running the portfolio.",
            primaryCta: "Discuss Your Portfolio",
            secondaryCta: "See AI Use Cases",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            imagePosition: "center",
            icon: Building2,
            insightTitle: "Agents only work when the portfolio data underneath them is real.",
            insightBody:
                "The opportunity is not a chatbot on top of broken spreadsheets. It is supervised automation tied to leases, work orders, approvals, vendor scopes, financial data, and asset strategy.",
            badges: ["Lease AI", "Ops agents", "Portfolio IQ"],
        },
        value: {
            headline: "Bring AI into the real work: leases, tenants, vendors, capital, and reporting.",
            body:
                "Real estate teams want fewer manual reports, faster leasing response, cleaner lease data, smarter maintenance routing, sharper portfolio reviews, and confidence that AI will not expose sensitive tenant, investor, or financial information. We design the system, supervise the vendors, and build the workflows that make that possible.",
            pillars: [
                {
                    title: "Make the portfolio AI-ready",
                    description:
                        "Clean up the data layer behind rent roll, leases, work orders, capex, debt, documents, and investor reporting so AI tools have reliable context.",
                    icon: Sparkles,
                },
                {
                    title: "Put agents on repetitive work",
                    description:
                        "Deploy supervised workflows for leasing follow-up, maintenance triage, owner updates, lease abstraction, vendor routing, and reporting prep.",
                    icon: Bot,
                },
                {
                    title: "Connect the proptech stack",
                    description:
                        "Integrate property management, asset management, construction, CRM, BI, document, tenant experience, and custom software platforms.",
                    icon: Workflow,
                },
            ],
        },
        systems: {
            headline: "Where the AI conversation becomes valuable",
            body:
                "The hard part is deciding what belongs in the stack, what needs to be custom, what data is safe to use, and what work should stay under human review. We translate that into a practical roadmap owners can actually execute.",
            stackTags: ["Yardi", "MRI", "AppFolio", "RealPage", "Buildium", "Procore", "VTS", "Dealpath", "Juniper Square", "HubSpot", "Salesforce", "Power BI"],
            bullets: [
                "AI readiness audits for leases, rent rolls, work orders, capex trackers, accounting exports, CRM data, debt schedules, and investor documents",
                "Agentic workflows that draft owner updates, compare monthly performance, route tasks, summarize leases, and escalate exceptions to the right human",
                "Portfolio dashboards for occupancy, leasing exposure, delinquency, maintenance backlog, vendor performance, capex status, debt covenants, and NOI movement",
                "Vendor selection and implementation oversight for PMS, asset management, construction, CRM, BI, document, tenant experience, and AI platforms",
                "Tenant, broker, investor, and property-team portals connected to real data and real approvals, not isolated login screens",
                "Security, permissioning, audit trails, model-risk controls, integration monitoring, and data governance before AI reaches sensitive property data",
            ],
        },
        useCases: {
            eyebrow: "AI and automation use cases",
            headline: "Build the tools people are already trying to buy, but make them fit the portfolio.",
            body:
                "The best opportunities are targeted: lease intelligence, maintenance triage, agent-assisted reporting, tenant communication, portfolio variance analysis, diligence review, and integrations that turn disconnected platforms into a usable operating layer.",
            cards: [
                {
                    title: "Lease and document intelligence",
                    description:
                        "Extract options, expirations, rent steps, CAM terms, insurance obligations, exclusives, renewal risk, estoppel details, and diligence findings from messy document sets.",
                    icon: FileSearch,
                },
                {
                    title: "Portfolio command centers",
                    description:
                        "Give asset managers a place to ask what changed, why NOI moved, which leases or loans need attention, and what belongs in the next investor or lender update.",
                    icon: ChartNoAxesCombined,
                },
                {
                    title: "Tenant and operations agents",
                    description:
                        "Triage service requests, route vendor work, summarize conversations, draft responses, flag recurring issues, and help teams move faster without losing human control.",
                    icon: KeyRound,
                },
            ],
        },
        finalCta: {
            eyebrow: "For owners, developers, and operators",
            headline: "Bring us in before AI becomes another disconnected platform.",
            body:
                "If your team is evaluating AI tools, replacing a property management system, integrating portfolio data, building tenant or investor portals, or automating reporting without losing control, Delta Tech Partners can define the architecture, manage the vendors, and build the missing software layer.",
            label: "Schedule a Real Estate Strategy Call",
        },
    },
    {
        slug: "healthcare",
        navLabel: "Healthcare",
        metadata: {
            title: "Healthcare Technology Owner's Rep | Delta Tech Partners",
            description:
                "Technical owner's representation for healthcare AI, EHR integrations, revenue cycle automation, patient portals, and secure data workflows.",
        },
        theme: {
            accent: "#2dd4bf",
            accentStrong: "#0f766e",
            panel: "rgba(19, 78, 74, 0.22)",
            border: "rgba(45, 212, 191, 0.28)",
            muted: "#99f6e4",
        },
        hero: {
            headline: "Technical ownership for AI-enabled healthcare operations.",
            body:
                "Medical groups, specialty practices, and health organizations are being asked to choose between AI scribes, RCM agents, patient portals, scheduling tools, data platforms, and EHR-native automation. We help clinical and administrative leaders make those decisions without increasing risk, burden, or vendor dependency.",
            primaryCta: "Discuss Your Practice",
            secondaryCta: "See Healthcare Use Cases",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
            imagePosition: "center",
            icon: HeartPulse,
            insightTitle: "Healthcare AI has to earn trust inside real clinical and billing workflows.",
            insightBody:
                "The value is not another dashboard. It is less clinician documentation burden, fewer claim delays, better patient access, safer data movement, and governance that keeps humans accountable for high-risk decisions.",
            badges: ["EHR AI", "RCM agents", "HIPAA-safe data"],
        },
        value: {
            headline: "We help teams reduce administrative drag without creating clinical or compliance risk.",
            body:
                "Healthcare teams need technical expertise that understands the operational reality: physicians do not want more clicks, billers do not want fragile workarounds, and executives cannot gamble with patient data. We act as the technical owner's rep between leadership, clinicians, vendors, compliance, and IT.",
            pillars: [
                {
                    title: "Integrate around the EHR",
                    description:
                        "Connect scheduling, intake, documentation, labs, billing, portals, referrals, analytics, and patient messaging around the clinical source of truth.",
                    icon: Network,
                },
                {
                    title: "Govern AI with human review",
                    description:
                        "Define where ambient notes, coding suggestions, prior auth agents, care-gap prompts, and patient-facing AI need review, audit trails, and escalation.",
                    icon: ShieldCheck,
                },
                {
                    title: "Automate the revenue cycle",
                    description:
                        "Improve intake, eligibility, coding support, claims status, denial management, appeals, payment reminders, and reporting without black-box workflows.",
                    icon: BadgeDollarSign,
                },
            ],
        },
        systems: {
            headline: "Where technical expertise matters most",
            body:
                "Healthcare technology projects fail when vendors optimize their product instead of the care model. We help teams define requirements, validate integration claims, protect patient data, and sequence implementation around staff adoption.",
            stackTags: ["Epic", "Oracle Health", "athenahealth", "eClinicalWorks", "NextGen", "DrChrono", "Waystar", "Availity", "Twilio", "Salesforce Health Cloud", "Azure", "Power BI"],
            bullets: [
                "EHR integration planning for APIs, FHIR resources, write-backs, identity, data quality, and operational ownership",
                "AI scribe, chart search, coding support, patient messaging, scheduling, and prior authorization workflow design",
                "Revenue cycle automation for eligibility, claims, denials, appeals, patient balances, and executive reporting",
                "Patient digital front doors that connect portals, reminders, forms, payments, telehealth, and asynchronous care",
                "Vendor selection, implementation supervision, acceptance testing, and change management for clinical and administrative teams",
                "HIPAA-aware security, access control, audit logging, data retention, and shadow-AI governance",
            ],
        },
        useCases: {
            eyebrow: "Healthcare use cases",
            headline: "Build systems that give time back to clinicians and control back to operators.",
            body:
                "The best healthcare technology projects are practical: reduce documentation time, prevent revenue leakage, improve access, and make patient data usable without compromising safety.",
            cards: [
                {
                    title: "Ambient documentation and chart AI",
                    description:
                        "Evaluate AI scribes, summarize encounters, search charts conversationally, and design review workflows before notes or codes enter the record.",
                    icon: Stethoscope,
                },
                {
                    title: "RCM and prior authorization agents",
                    description:
                        "Automate repeatable intake, eligibility, coding support, denial research, appeal drafts, payer status checks, and exception routing.",
                    icon: Activity,
                },
                {
                    title: "Patient access and engagement",
                    description:
                        "Connect scheduling, reminders, digital forms, care instructions, payments, portal messages, and virtual triage into a cleaner patient journey.",
                    icon: Users,
                },
            ],
        },
        finalCta: {
            eyebrow: "For medical groups and health operators",
            headline: "Bring us in before a healthtech tool becomes another operational burden.",
            body:
                "If your team is evaluating AI scribes, patient portals, RCM automation, EHR integrations, analytics, or secure data workflows, Delta Tech Partners can help define the path, supervise vendors, and protect the organization from avoidable implementation risk.",
            label: "Schedule a Healthcare Tech Review",
        },
    },
    {
        slug: "manufacturing",
        navLabel: "Manufacturing",
        metadata: {
            title: "Manufacturing Technology Owner's Rep | Delta Tech Partners",
            description:
                "Technical owner's representation for manufacturers implementing ERP, MES, WMS, IoT, predictive maintenance, AI, and shop-floor data systems.",
        },
        theme: {
            accent: "#f59e0b",
            accentStrong: "#b45309",
            panel: "rgba(120, 53, 15, 0.22)",
            border: "rgba(245, 158, 11, 0.28)",
            muted: "#fcd34d",
        },
        hero: {
            headline: "Connect the plant floor to AI-ready decisions.",
            body:
                "Manufacturers are being pitched predictive maintenance, AI scheduling, connected factories, quality automation, ERP intelligence, and autonomous supply chains. We help leadership turn those promises into practical systems that improve uptime, throughput, quality, and margin.",
            primaryCta: "Discuss Your Operation",
            secondaryCta: "See Industrial Use Cases",
            image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
            imagePosition: "center",
            icon: Factory,
            insightTitle: "Smart factories do not start with a giant software overhaul.",
            insightBody:
                "They start with the bottleneck that hurts the business: downtime, scrap, late orders, poor scheduling, inventory drift, manual quality checks, or disconnected machine data.",
            badges: ["ERP + MES", "Predictive uptime", "Quality AI"],
        },
        value: {
            headline: "We bring technical ownership to the messy middle between OT, IT, vendors, and operators.",
            body:
                "Manufacturing teams need technology that respects production reality. We help plant leaders, operations executives, and ownership groups scope systems correctly, connect the data layer, and keep vendors accountable to measurable operational outcomes.",
            pillars: [
                {
                    title: "Bridge OT and IT",
                    description:
                        "Connect PLCs, sensors, historians, MES, ERP, WMS, maintenance systems, and BI without letting plant-floor realities get lost in enterprise architecture.",
                    icon: Network,
                },
                {
                    title: "Target the highest-value bottlenecks",
                    description:
                        "Focus AI and automation on downtime, scheduling, quality, maintenance, yield, changeovers, procurement risk, and inventory accuracy.",
                    icon: Wrench,
                },
                {
                    title: "Make vendors prove value",
                    description:
                        "Define requirements, integration responsibilities, data ownership, acceptance tests, and rollout plans before ERP, MES, or automation vendors control the project.",
                    icon: ClipboardCheck,
                },
            ],
        },
        systems: {
            headline: "Where manufacturers need a technical owner's rep",
            body:
                "The right technical partner can keep a modernization program grounded in operations. We translate business goals into plant-ready requirements and build the connective tissue between enterprise systems and production work.",
            stackTags: ["SAP", "NetSuite", "Dynamics", "Epicor", "Infor", "Plex", "Siemens", "Rockwell", "Ignition", "Tulip", "Snowflake", "Power BI"],
            bullets: [
                "ERP, MES, WMS, QMS, CMMS, and BI implementation oversight with clear ownership for each integration point",
                "Machine-data pipelines for predictive maintenance, OEE tracking, quality monitoring, production visibility, and downtime analysis",
                "AI-assisted scheduling, procurement risk signals, demand forecasting, maintenance prioritization, and exception handling",
                "Plant dashboards for throughput, scrap, cycle time, changeover loss, inventory drift, late orders, and vendor performance",
                "OT/IT cybersecurity review for access, segmentation, backups, remote vendor connectivity, and incident response",
                "Phased rollout plans that protect production schedules instead of forcing risky all-at-once transformations",
            ],
        },
        useCases: {
            eyebrow: "Industrial use cases",
            headline: "Make automation measurable before making it autonomous.",
            body:
                "The strongest manufacturing projects connect one operating pain to one measurable business result, then scale across lines, plants, products, and suppliers.",
            cards: [
                {
                    title: "Predictive maintenance and downtime AI",
                    description:
                        "Use sensor data, maintenance history, production schedules, and operator context to predict failures, prioritize work, and reduce unplanned downtime.",
                    icon: Activity,
                },
                {
                    title: "Production command centers",
                    description:
                        "Unify ERP, MES, WMS, quality, and machine data so leaders can see what is behind missed output, margin pressure, late orders, and quality drift.",
                    icon: LineChart,
                },
                {
                    title: "Supply chain and procurement agents",
                    description:
                        "Monitor supplier risk, material shortages, price changes, late shipments, and alternate sourcing paths before production feels the disruption.",
                    icon: Bot,
                },
            ],
        },
        finalCta: {
            eyebrow: "For manufacturers and industrial operators",
            headline: "Bring us in before a modernization project reaches the plant floor.",
            body:
                "If your team is replacing ERP, adding MES, connecting machines, evaluating AI scheduling, modernizing maintenance, or trying to make production data reliable, Delta Tech Partners can define the architecture, manage vendors, and protect operational continuity.",
            label: "Schedule a Manufacturing Tech Review",
        },
    },
    {
        slug: "hospitality",
        navLabel: "Hospitality",
        metadata: {
            title: "Hospitality Technology Owner's Rep | Delta Tech Partners",
            description:
                "Technical owner's representation for hotels, restaurants, venues, and multi-location hospitality operators implementing AI, POS, PMS, loyalty, labor, and guest-experience systems.",
        },
        theme: {
            accent: "#fb7185",
            accentStrong: "#be123c",
            panel: "rgba(136, 19, 55, 0.2)",
            border: "rgba(251, 113, 133, 0.28)",
            muted: "#fda4af",
        },
        hero: {
            headline: "Guest experience is becoming the operating system.",
            body:
                "Hotels, restaurants, venues, and multi-location operators are buying AI phone agents, smart PMS and POS platforms, guest messaging, labor tools, loyalty systems, inventory automation, and personalization engines. We help operators make those systems work together without losing the hospitality that makes the brand matter.",
            primaryCta: "Discuss Your Guest Journey",
            secondaryCta: "See Hospitality Use Cases",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
            imagePosition: "center",
            icon: Hotel,
            insightTitle: "Automation should make service feel faster, not colder.",
            insightBody:
                "The best hospitality systems remove routine friction from ordering, booking, check-in, staffing, inventory, and support so teams can spend more time on high-touch guest moments.",
            badges: ["PMS + POS", "Guest AI", "Labor clarity"],
        },
        value: {
            headline: "We connect the revenue, service, labor, and loyalty systems behind the guest experience.",
            body:
                "Hospitality teams need technical expertise that understands speed, uptime, payments, staffing, service recovery, and brand consistency. We help leadership choose tools, integrate platforms, and automate workflows across the front of house, back of house, and corporate office.",
            pillars: [
                {
                    title: "Unify PMS, POS, CRM, and loyalty",
                    description:
                        "Give teams a clearer view of guest behavior, spend, preferences, reservations, service issues, and repeat visits across locations and channels.",
                    icon: Store,
                },
                {
                    title: "Automate routine guest work",
                    description:
                        "Deploy AI for phone ordering, booking questions, status updates, guest messaging, service recovery drafts, and staff handoffs with human escalation.",
                    icon: Bot,
                },
                {
                    title: "Protect uptime and payment flows",
                    description:
                        "Review architecture, integrations, access, PCI-sensitive workflows, vendor dependencies, backups, and failure modes before systems hit rush hour.",
                    icon: LockKeyhole,
                },
            ],
        },
        systems: {
            headline: "Where hospitality teams need technical ownership",
            body:
                "The stack is crowded, and every vendor wants to own the guest record. We help operators decide what should be core, what should integrate, what should be custom, and what should never interrupt service.",
            stackTags: ["Opera", "Mews", "Cloudbeds", "Toast", "Square", "Lightspeed", "SevenRooms", "OpenTable", "Resy", "Stripe", "Klaviyo", "HubSpot"],
            bullets: [
                "PMS, POS, booking, loyalty, CRM, payments, kitchen, inventory, and labor system integration planning",
                "AI phone, chat, order, concierge, reservation, and service-recovery workflows with escalation rules and brand voice controls",
                "Guest data unification for personalization, segmentation, retention campaigns, preferences, and service history",
                "Labor, demand, inventory, food waste, occupancy, table turn, and revenue dashboards for operators and ownership",
                "Vendor selection and implementation oversight for multi-location rollouts, menu data, room data, permissions, and staff training",
                "Cybersecurity, PCI-aware workflows, outage planning, identity, access control, and data privacy review",
            ],
        },
        useCases: {
            eyebrow: "Hospitality use cases",
            headline: "Build automation that supports the team instead of replacing the experience.",
            body:
                "The best hospitality technology quietly removes repetitive work while giving managers more control over demand, staffing, guest recovery, and operational consistency.",
            cards: [
                {
                    title: "Guest communication agents",
                    description:
                        "Handle common calls, texts, booking questions, order status, room requests, reservation changes, and recovery drafts while routing sensitive issues to staff.",
                    icon: Users,
                },
                {
                    title: "Labor and inventory intelligence",
                    description:
                        "Connect sales, reservations, occupancy, events, weather, inventory, and staffing data to forecast demand and reduce waste or understaffing.",
                    icon: Utensils,
                },
                {
                    title: "Multi-location operating dashboards",
                    description:
                        "Give owners and GMs one view of revenue, labor, payments, reviews, guest issues, menu performance, occupancy, and service exceptions.",
                    icon: ChartNoAxesCombined,
                },
            ],
        },
        finalCta: {
            eyebrow: "For hotels, restaurants, venues, and operators",
            headline: "Bring us in before a guest-facing system hits the floor.",
            body:
                "If your team is replacing POS or PMS, adding AI ordering, rolling out loyalty, connecting guest data, automating labor planning, or scaling across locations, Delta Tech Partners can define the system, supervise vendors, and keep the guest experience intact.",
            label: "Schedule a Hospitality Tech Review",
        },
    },
    {
        slug: "private-equity",
        navLabel: "Private Equity",
        metadata: {
            title: "Private Equity Technology Owner's Rep | Delta Tech Partners",
            description:
                "Technology diligence, portfolio operations support, AI implementation, cybersecurity review, and ERP/CRM modernization for private equity firms and portfolio companies.",
        },
        theme: {
            accent: "#a3e635",
            accentStrong: "#4d7c0f",
            panel: "rgba(54, 83, 20, 0.2)",
            border: "rgba(163, 230, 53, 0.28)",
            muted: "#d9f99d",
        },
        hero: {
            headline: "Technical owner reps for portfolio-company value creation.",
            body:
                "Private equity teams are under pressure to separate AI theater from EBITDA impact, assess technical risk faster, and modernize portfolio-company systems after close. We help investors and operators evaluate technology, supervise implementation, and build repeatable AI and data playbooks across the portfolio.",
            primaryCta: "Discuss Your Portfolio",
            secondaryCta: "See PE Use Cases",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
            imagePosition: "center",
            icon: Briefcase,
            insightTitle: "The technology question is no longer just risk. It is value creation.",
            insightBody:
                "ERP, CRM, cybersecurity, data architecture, and AI readiness now shape diligence, 100-day plans, operating leverage, reporting quality, and exit narratives.",
            badges: ["Tech diligence", "AI playbooks", "EBITDA systems"],
        },
        value: {
            headline: "We help investors turn technology risk into a disciplined operating plan.",
            body:
                "PE firms and portfolio companies need a technical partner who can speak with deal teams, CEOs, CFOs, operators, vendors, and engineers. We identify the systems that create drag, define the modernization path, and keep implementation tied to enterprise value.",
            pillars: [
                {
                    title: "Run practical tech diligence",
                    description:
                        "Assess architecture, scalability, product risk, security posture, data quality, vendor dependency, AI claims, and integration debt before the deal closes.",
                    icon: FileSearch,
                },
                {
                    title: "Build the post-close roadmap",
                    description:
                        "Prioritize ERP, CRM, finance, data, cybersecurity, workflow automation, and AI projects around the first 100 days and the investment thesis.",
                    icon: ClipboardCheck,
                },
                {
                    title: "Deploy repeatable AI operations",
                    description:
                        "Create playbooks for reporting, sales ops, customer support, finance workflows, knowledge search, procurement, and internal productivity across portfolio companies.",
                    icon: BrainCircuit,
                },
            ],
        },
        systems: {
            headline: "Where PE teams need technical leverage",
            body:
                "The firms that win with AI and modernization will not just buy software. They will clean up architecture, standardize data, secure identity, and put agents where they change workflows and economics.",
            stackTags: ["Salesforce", "HubSpot", "NetSuite", "SAP", "Dynamics", "QuickBooks", "Snowflake", "Power BI", "Tableau", "Okta", "Vanta", "Jira"],
            bullets: [
                "Pre-close diligence for codebases, data architecture, cybersecurity, cloud spend, product scalability, vendor dependency, and AI defensibility",
                "100-day technology plans for ERP, CRM, finance stack, data warehouse, reporting, identity, security, and operating workflows",
                "AI use-case selection that separates EBITDA impact from novelty across sales, support, finance, operations, and product teams",
                "Portfolio reporting systems for KPI definitions, board packs, revenue operations, customer health, margin drivers, and integration status",
                "Vendor selection and implementation oversight for portfolio-company migrations, cleanups, and automation programs",
                "Cybersecurity, access control, compliance readiness, incident response, and AI-agent permissioning before scale or exit",
            ],
        },
        useCases: {
            eyebrow: "Private equity use cases",
            headline: "Give deal and operating teams a technical partner who can move from diligence to delivery.",
            body:
                "The strongest PE technology work is practical, repeatable, and tied to value creation: faster diligence, cleaner systems, better reporting, fewer cyber surprises, and AI workflows that actually change operating economics.",
            cards: [
                {
                    title: "Technology diligence and AI hype checks",
                    description:
                        "Review the target's stack, data quality, AI claims, integration risk, security posture, engineering practices, vendor contracts, and scalability constraints.",
                    icon: ShieldCheck,
                },
                {
                    title: "ERP, CRM, and data cleanup",
                    description:
                        "Modernize the systems that drive forecasting, sales operations, financial close, customer health, margin visibility, board reporting, and exit readiness.",
                    icon: Workflow,
                },
                {
                    title: "Portfolio AI operating playbooks",
                    description:
                        "Deploy governed agents for knowledge search, sales follow-up, support triage, finance operations, procurement, management reporting, and workflow automation.",
                    icon: Bot,
                },
            ],
        },
        finalCta: {
            eyebrow: "For investors and portfolio operators",
            headline: "Bring us in before technology risk gets priced into the deal or buried after close.",
            body:
                "If your team is running diligence, building a 100-day plan, modernizing ERP or CRM, improving reporting, assessing cyber risk, or deploying AI across portfolio companies, Delta Tech Partners can provide the technical ownership needed to move from thesis to execution.",
            label: "Schedule a Portfolio Tech Review",
        },
    },
];

export const industryNavigation = industries.map((industry) => ({
    href: `/industries/${industry.slug}`,
    label: industry.navLabel,
}));

export function getIndustryConfig(slug: string) {
    return industries.find((industry) => industry.slug === slug);
}