export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Customer Experience Manager",
    company: "TeleLink Africa",
    period: "2022 – Present",
    type: "Full-time",
    isCurrent: true,
    highlights: [
      "Lead a 40-agent support team across 3 countries, maintaining a 94% CSAT score.",
      "Designed the company-wide Customer Service Playbook, adopted by all 6 departments.",
      "Reduced average customer resolution time by 38% through a structured escalation matrix.",
      "Built and rolled out onboarding & coaching programs for all new support hires.",
    ],
  },
  {
    role: "Client Success Lead",
    company: "PrimeCap Finance",
    period: "2020 – 2022",
    type: "Full-time",
    highlights: [
      "Managed a portfolio of 50+ enterprise clients representing $3.5M in ARR.",
      "Designed VIP Support Lane, reducing enterprise churn from 18% to under 5%.",
      "Achieved a 97% contract renewal rate through proactive QBR cycles.",
      "Trained and mentored a 5-person enterprise success squad.",
    ],
  },
  {
    role: "Customer Support Specialist",
    company: "StyleHaven Nigeria",
    period: "2018 – 2020",
    type: "Full-time",
    highlights: [
      "Built the support function from scratch as the company's first dedicated CS hire.",
      "Stood up a 3-channel support operation (email, chat, WhatsApp) handling 10K contacts/month.",
      "Hired, trained, and managed a 12-person team across two time zones.",
      "Designed 120+ agent macros and automated triggers inside Zendesk.",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "FirstBank Nigeria",
    period: "2016 – 2018",
    type: "Full-time",
    highlights: [
      "Top-ranked CSR for 6 consecutive quarters based on CSAT and quality scores.",
      "Handled 80+ daily customer interactions across phone, email, and in-branch.",
      "Promoted to senior specialist status after 12 months for consistent performance.",
    ],
  },
];
