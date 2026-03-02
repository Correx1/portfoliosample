'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const TOOLS = [
  { name: 'Zendesk', level: 95, category: 'Tool' },
  { name: 'Salesforce CRM', level: 88, category: 'Tool' },
  { name: 'Intercom', level: 85, category: 'Tool' },
  { name: 'Freshdesk', level: 80, category: 'Tool' },
  { name: 'Gainsight', level: 75, category: 'Tool' },
  { name: 'HubSpot', level: 78, category: 'Tool' },
];

const CORE_SKILLS = [
  { name: 'CSAT / NPS Management', level: 96, category: 'Skill' },
  { name: 'Support Team Leadership', level: 94, category: 'Skill' },
  { name: 'Process Design & Playbooks', level: 92, category: 'Skill' },
  { name: 'Customer Retention Strategy', level: 90, category: 'Skill' },
  { name: 'Conflict Resolution', level: 95, category: 'Skill' },
  { name: 'SLA & KPI Management', level: 88, category: 'Skill' },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setValue(level);
      }, delay * 100);
      return () => clearTimeout(timeout);
    }
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-bold text-[#F59E0B]">{value}%</span>
      </div>
      <Progress
        value={value}
        className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-[#F59E0B] [&>div]:to-[#FCD34D] [&>div]:transition-all [&>div]:duration-[1200ms] [&>div]:ease-out"
      />
    </div>
  );
}

const SOFT_BADGES = [
  'Empathy-Led Service', 'Active Listening', 'Cross-Cultural Communication',
  'Stakeholder Management', 'Training & Coaching', 'Data-Driven Decisions',
  'Root Cause Analysis', 'Team Motivation', 'Crisis De-escalation',
  'Feedback Loop Design', 'Customer Journey Mapping', 'Change Management',
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad force-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] to-[#0A1128] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] text-xs uppercase tracking-widest px-4 py-1 mb-4">
            Skills & Toolset
          </Badge>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The <span className="text-[#F59E0B]">Expertise</span> Behind the Results
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              Core CX Skills
            </h3>
            <div className="flex flex-col gap-5">
              {CORE_SKILLS.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Tools & Platforms
            </h3>
            <div className="flex flex-col gap-5">
              {TOOLS.map((tool, i) => (
                <SkillBar key={tool.name} {...tool} delay={i + 6} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills / Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {SOFT_BADGES.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ scale: 1.05 }}
                className="cursor-default rounded-full border border-[#1E2F5A] bg-[#121E3E] px-4 py-2 text-xs font-medium text-slate-300 hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-all duration-200"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
