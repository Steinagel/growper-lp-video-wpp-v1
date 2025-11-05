'use client';

import Link from 'next/link';
import { Container } from './Container';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Como Funciona', href: '#como-funciona' },
  { name: 'Benefícios', href: '#beneficios' },
  { name: 'FAQ', href: '#faq' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Navegação principal">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Growper
            </Link>
          </div>

          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button asChild size="sm">
              <a href="#calculadora">Simular Agora</a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden focus-ring rounded-lg p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="w-full">
                <a href="#calculadora" onClick={() => setMobileMenuOpen(false)}>
                  Simular Agora
                </a>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

