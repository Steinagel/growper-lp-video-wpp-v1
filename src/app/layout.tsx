import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Growper',
    default: 'Reduza suas parcelas com segurança jurídica | Growper',
  },
  description:
    'Assista ao vídeo e entenda em 60 segundos como reduzir suas parcelas de financiamento em até 70% com total segurança jurídica.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growper.com.br',
    siteName: 'Growper',
    title: 'Reduza suas parcelas com segurança jurídica',
    description:
      'Assista ao vídeo e entenda em 60 segundos como reduzir suas parcelas de financiamento em até 70%.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Growper',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growper.com.br',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-11-99999-9999',
                contactType: 'customer service',
                areaServed: 'BR',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
