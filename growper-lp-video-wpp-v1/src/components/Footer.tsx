import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Growper</h3>
              <p className="text-sm text-gray-600">
                Especialistas em redução de parcelas de financiamento imobiliário.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacidade" className="text-gray-600 hover:text-primary-600">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="text-gray-600 hover:text-primary-600">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Contato</h3>
              <p className="text-sm text-gray-600">
                CNPJ: 00.000.000/0001-00
                <br />
                contato@growper.com.br
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {currentYear} Growper. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

