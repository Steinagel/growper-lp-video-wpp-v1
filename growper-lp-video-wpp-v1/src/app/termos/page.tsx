import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';

export const metadata = {
  title: 'Termos de Uso',
};

export default function TermosPage() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h1>Termos de Uso</h1>
            <p className="text-gray-600">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar este site, você aceita e concorda em cumprir estes Termos de Uso.
              Se você não concordar com qualquer parte destes termos, não use nosso site.
            </p>

            <h2>2. Serviços Oferecidos</h2>
            <p>
              A Growper oferece serviços de análise e consultoria para redução de parcelas de
              financiamento imobiliário, incluindo renegociação e portabilidade de crédito.
            </p>

            <h2>3. Uso do Site</h2>
            <p>Você concorda em usar o site apenas para fins legais e de acordo com estes termos:</p>
            <ul>
              <li>Não usar o site de forma que possa danificá-lo ou prejudicar sua disponibilidade</li>
              <li>Não usar o site para transmitir material ilegal ou ofensivo</li>
              <li>Fornecer informações verdadeiras e precisas</li>
            </ul>

            <h2>4. Simulações e Estimativas</h2>
            <p>
              As simulações fornecidas são estimativas baseadas nas informações fornecidas e nas
              condições de mercado. Os resultados reais podem variar e dependem de análise
              detalhada e aprovação das instituições financeiras.
            </p>

            <h2>5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site, incluindo textos, gráficos, logos e software, é propriedade
              da Growper e protegido por leis de direitos autorais.
            </p>

            <h2>6. Limitação de Responsabilidade</h2>
            <p>
              A Growper não se responsabiliza por danos indiretos, incidentais ou consequenciais
              decorrentes do uso ou impossibilidade de uso do site ou serviços.
            </p>

            <h2>7. Modificações</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
              entram em vigor imediatamente após a publicação no site.
            </p>

            <h2>8. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil.
            </p>

            <h2>9. Contato</h2>
            <p>
              Para questões sobre estes termos, entre em contato: contato@growper.com.br
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

