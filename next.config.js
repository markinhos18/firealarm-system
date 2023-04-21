// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },

  images: {
    domains: ['localhost', 'www.jemsystems.us']
    // formats: ['image/jpg', 'image/webp']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
