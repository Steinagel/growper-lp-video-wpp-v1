import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Política de Privacidade',
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h1>Política de Privacidade</h1>
            <p className="text-gray-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <h2>1. Informações que Coletamos</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, incluindo nome, telefone,
              e-mail e dados sobre seu financiamento imobiliário.
            </p>

            <h2>2. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul>
              <li>Analisar seu financiamento e propor soluções de redução de parcelas</li>
              <li>Entrar em contato com você sobre nossos serviços</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>

            <h2>3. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:
            </p>
            <ul>
              <li>Instituições financeiras para análise de portabilidade</li>
              <li>Prestadores de serviços que nos auxiliam nas operações</li>
              <li>Autoridades quando exigido por lei</li>
            </ul>

            <h2>4. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas
              informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2>5. Seus Direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência. Você pode configurar seu navegador
              para recusar cookies, mas isso pode afetar a funcionalidade do site.
            </p>

            <h2>7. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
              contato: contato@growper.com.br
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

