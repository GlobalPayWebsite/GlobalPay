import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'jp'],

  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      en: '/pathnames',
      jp: '/pfadamen',
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
