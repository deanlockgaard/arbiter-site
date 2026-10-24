export const SITE = {
  name: 'Arbiter',
  title: 'Arbiter. A merge gate for AI-written code changes.',
  description:
    'Arbiter checks every pull request that touches sensitive code against your policy, kept as code in your own GitHub, and allows, blocks or escalates it before it can merge. It runs in your own environment.',
  email: 'dean@arbitercontrol.com',
  location: 'San Francisco, CA',
  linkedIn: 'https://www.linkedin.com/company/arbitercontrol',
  copyright: '© 2026 Arbiter',
} as const;

/** The docs site (docs.arbitercontrol.com), built from ArbiterControl/arbiter. */
export const DOCS = {
  home: 'https://docs.arbitercontrol.com/',
  data: 'https://docs.arbitercontrol.com/data-rule/',
  admin: 'https://docs.arbitercontrol.com/manuals/administrator/',
  starter: 'https://docs.arbitercontrol.com/starter-policy/',
} as const;

export const LOGO = {
  width: 236,
  height: 232,
} as const;

export const MAILTO_PILOT =
  `mailto:${SITE.email}?subject=Arbiter%20pilot`;

/** Unified CTA label — used on every pilot button/link site-wide */
export const CTA_PILOT_LABEL = 'Request a pilot';

/** aria-label for pilot mailto CTAs (visible text stays CTA_PILOT_LABEL) */
export const CTA_PILOT_ARIA_LABEL = 'Request an Arbiter pilot by email';
