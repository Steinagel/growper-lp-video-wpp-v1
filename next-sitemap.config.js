module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://growper.com.br',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

