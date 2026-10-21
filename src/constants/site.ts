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
