export const SITE = {
  name: 'Arbiter',
  title: 'Arbiter. Deterministic control for AI agent actions.',
  description:
    'Before AI agents modify protected code, access sensitive resources, deploy infrastructure, or perform production actions, Arbiter evaluates policy and returns a signed ALLOW, DENY, or ESCALATE decision.',
  email: 'dean@arbitercontrol.com',
  location: 'San Francisco, CA',
  linkedIn: 'https://www.linkedin.com/company/arbitercontrol',
  copyright: '© 2026 Arbiter',
} as const;

export const MAILTO_PILOT =
  `mailto:${SITE.email}?subject=Arbiter%20pilot`;

/** Unified CTA label — used on every pilot button/link site-wide */
export const CTA_PILOT_LABEL = 'Request a pilot';

/** aria-label for pilot mailto CTAs (visible text stays CTA_PILOT_LABEL) */
export const CTA_PILOT_ARIA_LABEL = 'Request an Arbiter pilot by email';
