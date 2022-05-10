/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { i18n } = require('./next-i18next.config');


module.exports = {
  nextConfig, 
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
    localePath: path.resolve('./public/static/locales')
  }
}
