import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pokemon': '/pokemon',
    '/pokemon/team/create': '/pokemon/team/create',
    '/pokemon/team/fight': '/pokemon/team/fight',
  },
});
