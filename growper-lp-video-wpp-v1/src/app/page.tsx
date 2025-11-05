import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Calculator } from '@/components/Calculator';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CheckCircle2, Shield, Clock, TrendingDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section id="inicio" className="bg-gradient-to-b from-primary-50 to-white pt-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Pague menos na sua parcela do imóvel
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Simulação gratuita em 1 minuto. Analisamos seu contrato e indicamos possibilidades
              de redução entre 30% e 70%.
            </p>
            <WhatsAppButton size="lg" />
          </div>
        </Section>

        <Section id="calculadora" className="bg-gray-50">
          <div className="mx-auto max-w-2xl">
            <Calculator />
          </div>
        </Section>

        <Section id="beneficios">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Por que escolher a Growper?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-100 p-4">
                  <TrendingDown className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Economia Real</h3>
              <p className="text-gray-600">
                Reduza suas parcelas em até 70% com nossa análise especializada
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-100 p-4">
                  <Shield className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Segurança Jurídica</h3>
              <p className="text-gray-600">
                Todo processo com respaldo legal e proteção dos seus direitos
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-100 p-4">
                  <Clock className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Processo Rápido</h3>
              <p className="text-gray-600">
                Análise em até 48h e conclusão em média de 30 a 60 dias
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary-100 p-4">
                  <CheckCircle2 className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Taxa de Sucesso</h3>
              <p className="text-gray-600">
                Mais de 85% dos casos conseguem redução significativa
              </p>
            </div>
          </div>
        </Section>

        <Section id="como-funciona" className="bg-gray-50">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Como funciona</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Simulação Gratuita</h3>
                <p className="text-gray-600">
                  Preencha o formulário com os dados do seu financiamento e receba uma estimativa
                  imediata de economia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Análise Detalhada</h3>
                <p className="text-gray-600">
                  Nossa equipe analisa seu contrato e identifica as melhores oportunidades de
                  redução.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Negociação</h3>
                <p className="text-gray-600">
                  Cuidamos de toda a negociação com o banco ou buscamos portabilidade para
                  instituições com taxas menores.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                4
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Economia Garantida</h3>
                <p className="text-gray-600">
                  Você assina o novo contrato e começa a pagar menos imediatamente.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="faq">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQ />
          </div>
        </Section>

        <Section className="bg-primary-600 text-white">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Pronto para economizar?</h2>
            <p className="mb-8 text-lg">
              Faça sua simulação gratuita agora e descubra quanto você pode economizar.
            </p>
            <WhatsAppButton variant="accent" size="lg" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

