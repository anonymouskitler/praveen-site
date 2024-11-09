import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: getPermalink('/'),
    },
    {
      text: 'ABOUT US',
      href: getPermalink('/about'),
    },
    {
      text: 'SERVICES',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Audits',
          href: getPermalink('/services/audits'),
        },
        {
          text: 'Income Tax',
          href: getPermalink('/services/income-tax'),
        },
        {
          text: 'Company Law',
          href: getPermalink('/services/company-law'),
        },
        {
          text: 'Reports',
          href: getPermalink('/services/reports'),
        },
        {
          text: 'Registrations',
          href: getPermalink('/services/registrations'),
        },
        {
          text: 'Outsourcing',
          href: getPermalink('/services/outsourcing'),
        },
        {
          text: 'Certificate Attestations',
          href: getPermalink('/services/attestations'),
        },
        {
          text: 'NRI Services',
          href: getPermalink('/services/nri-services'),
        },
      ],
    },
    {
      text: 'CONTACT US',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/contact'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Audits', href: getPermalink('/services/audits') },
        { text: 'Income Tax', href: getPermalink('/services/income-tax') },
        { text: 'Company Law', href: getPermalink('/services/company-law') },
        { text: 'Reports', href: getPermalink('/services/reports') },
        { text: 'Registrations', href: getPermalink('/services/registrations') },
        { text: 'NRI Services', href: getPermalink('/services/nri-services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Locations', href: getPermalink('/about#locations') },
        { text: 'Professional Team', href: getPermalink('/about#team') },
      ],
    },
    {
      title: 'Locations',
      links: [{ text: 'Palamaner Office', href: getPermalink('/contact#palamaner') }],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Disclaimer', href: getPermalink('/disclaimer') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right"></span>
    © ${new Date().getFullYear()} All rights reserved.
  `,
};
