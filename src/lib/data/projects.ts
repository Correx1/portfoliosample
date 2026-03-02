export interface Project {
  slug: string;
  title: string;
  category: string;
  industry: string;
  tagline: string;
  description: string; // Rich paragraph for the homepage listing
  thumbnail: string;
  heroColor: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string; icon: string }[];
  tools: string[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
}

export const projects: Project[] = [
  {
    slug: 'csat-turnaround-telecom',
    title: 'CSAT Turnaround Program',
    tagline: 'Raised customer satisfaction from 61% to 94% in 6 months.',
    description:
      'A mid-sized telecom provider was haemorrhaging subscribers. Their CSAT sat at a damaging 61%, driven by long wait times, inconsistent agent quality, and a broken escalation process. I was brought in to fix it. Within six months — through a full support audit, a structured Customer Service Playbook, a tiered escalation matrix, and weekly agent coaching sessions — we pushed CSAT to 94%, slashed resolution time by 38%, and cut churn by 22%. The turnaround became a case study referenced across the organisation.',
    category: 'Customer Experience',
    industry: 'Telecommunications',
    thumbnail: '/projects/csat-telecom.jpg',
    heroColor: '#F59E0B',
    challenge:
      'A mid-sized telecom operator was losing subscribers at an alarming rate. Their CSAT scores sat at 61%, driven by long wait times, inconsistent support quality, and a broken escalation process. The support team of 40 agents had no unified playbook.',
    approach: [
      'Conducted a 2-week audit of 500+ recorded support calls to identify root failure patterns.',
      'Designed and rolled out a structured Customer Service Playbook covering all product lines.',
      'Implemented a tiered escalation matrix reducing average resolution time by 38%.',
      'Introduced weekly agent coaching sessions with scorecards tied to CSAT metrics.',
      'Deployed proactive outreach campaigns for at-risk accounts before they churned.',
    ],
    results: [
      { label: 'CSAT Increase', value: '61% → 94%', icon: 'TrendingUp' },
      { label: 'Resolution Time', value: '-38%', icon: 'Clock' },
      { label: 'Churn Rate', value: '-22%', icon: 'UserCheck' },
      { label: 'Agent Quality Score', value: '+45pts', icon: 'Star' },
    ],
    tools: ['Zendesk', 'Salesforce', 'Slack', 'Google Data Studio'],
    quote:
      'Victoria transformed our support team from a liability into our biggest competitive advantage. The turnaround was remarkable.',
    quoteAuthor: 'Daniel Osei',
    quoteRole: 'VP Operations, TeleLink Africa',
  },
  {
    slug: 'vip-client-retention',
    title: 'VIP Client Retention Initiative',
    tagline: 'Saved $1.2M in annual recurring revenue through a high-touch retention strategy.',
    description:
      'Enterprise churn is silent and expensive. This financial services firm was losing 18% of its top-tier clients each year — $1.2M in ARR quietly walking out the door. Standard support workflows simply weren\'t built for high-value relationships. I designed a VIP Support Lane with named account managers, ironclad SLA guarantees, and a quarterly business review cadence. A custom health-score dashboard gave us 60-day early warning on at-risk accounts. The result: enterprise churn dropped from 18% to under 5%, NPS jumped 52 points, and the client renewal rate hit 97%.',
    category: 'Client Success',
    industry: 'Financial Services',
    thumbnail: '/projects/vip-retention.jpg',
    heroColor: '#2563EB',
    challenge:
      'A financial services firm was experiencing 18% annual churn among their top-tier enterprise clients, representing $1.2M in annual recurring revenue. Standard support workflows weren\'t meeting the expectations of high-value accounts.',
    approach: [
      'Mapped the full lifecycle journey of top-20 accounts to identify drop-off moments.',
      'Created a dedicated VIP Support Lane with named account managers and SLA guarantees.',
      'Designed a quarterly business review (QBR) template to demonstrate ongoing value.',
      'Built a health-score dashboard to flag at-risk clients 60 days before contract renewals.',
      'Trained a squad of 5 senior agents exclusively for enterprise-tier support.',
    ],
    results: [
      { label: 'ARR Saved', value: '$1.2M', icon: 'DollarSign' },
      { label: 'Enterprise Churn', value: '-73%', icon: 'TrendingDown' },
      { label: 'NPS Score', value: '+52pts', icon: 'Heart' },
      { label: 'Renewal Rate', value: '97%', icon: 'RefreshCw' },
    ],
    tools: ['Salesforce', 'Gainsight', 'Notion', 'Intercom'],
    quote:
      'The VIP program Victoria built felt like having a dedicated partner, not just a support team. We renewed without hesitation.',
    quoteAuthor: 'Amara Diallo',
    quoteRole: 'CFO, PrimeCap Finance',
  },
  {
    slug: 'multi-channel-support-buildout',
    title: 'Multi-Channel Support Buildout',
    tagline: 'Built a 3-channel support operation from zero — handling 10,000+ contacts/month.',
    description:
      'Growth without infrastructure is a crisis in slow motion. This e-commerce startup scaled from 500 to 50,000 customers in 18 months and their support — a single overloaded shared inbox — imploded. Response times stretched to 5 days. The brand reputation was at stake. I stepped in and built the entire support operation from scratch: a Zendesk instance across email, live chat, and WhatsApp; a complete agent handbook with 120+ macros and automated triggers; and a 12-person team recruited and onboarded across two time zones. Within 90 days, first response time dropped from 5 days to 3 hours, CSAT reached 91%, and the team was handling 10,000+ monthly contacts with room to scale.',
    category: 'Operations',
    industry: 'E-Commerce',
    thumbnail: '/projects/multi-channel.jpg',
    heroColor: '#F59E0B',
    challenge:
      'A fast-growing e-commerce startup scaled from 500 to 50,000 customers in 18 months. Their support structure — a single shared inbox — completely collapsed. Customers waited up to 5 days for a response.',
    approach: [
      'Audited incoming contact volume by channel, urgency tier, and product category.',
      'Stood up a Zendesk instance with 3 channels: email, live chat, and WhatsApp.',
      'Wrote the complete agent handbook, 120+ macros, and automated workflow triggers.',
      'Hired and onboarded a 12-person support team across two time zones.',
      'Set KPIs: <4hr first response time, <24hr full resolution, >85 CSAT target.',
    ],
    results: [
      { label: 'Response Time', value: '5 days → 3hrs', icon: 'Zap' },
      { label: 'Monthly Contacts', value: '10K+ handled', icon: 'MessageSquare' },
      { label: 'CSAT', value: '91%', icon: 'ThumbsUp' },
      { label: 'Team Built', value: '12 agents', icon: 'Users' },
    ],
    tools: ['Zendesk', 'WhatsApp Business API', 'Shopify', 'Notion', 'Slack'],
    quote:
      'From chaos to a world-class support operation in 90 days. Victoria delivered beyond every expectation.',
    quoteAuthor: 'Kezia Nnaji',
    quoteRole: 'CEO, StyleHaven Nigeria',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
