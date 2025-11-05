const config = {
  titleTemplate: '%s | Growper',
  defaultTitle: 'Reduza suas parcelas de financiamento imobiliário',
  description:
    'Simulação gratuita e análise especializada para reduzir suas parcelas de financiamento imobiliário em até 70%. Descubra quanto você pode economizar.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growper.com.br',
    siteName: 'Growper',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Growper - Reduza suas parcelas',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default config;
