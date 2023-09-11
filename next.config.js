const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    // Migrating to app directory. Best to do this in the meantime.
    ignoreBuildErrors: true
  }
}
