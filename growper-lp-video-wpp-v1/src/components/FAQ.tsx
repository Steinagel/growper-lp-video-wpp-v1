'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'Como funciona o processo de redução de parcelas?',
    answer:
      'Analisamos seu contrato de financiamento imobiliário e identificamos oportunidades de renegociação com o banco ou portabilidade para instituições com taxas menores. Todo o processo é feito com segurança jurídica.',
  },
  {
    question: 'Qual o prazo para conseguir a redução?',
    answer:
      'O processo completo leva em média de 30 a 60 dias, dependendo da complexidade do caso e da resposta do banco.',
  },
  {
    question: 'Quais documentos são necessários?',
    answer:
      'Você precisará do contrato de financiamento, comprovantes de renda atualizados, documentos pessoais e comprovante de residência.',
  },
  {
    question: 'Quem pode solicitar a redução?',
    answer:
      'Qualquer pessoa que tenha um financiamento imobiliário ativo pode solicitar. A viabilidade depende da análise do contrato e do perfil de crédito.',
  },
  {
    question: 'Há algum custo para a simulação?',
    answer:
      'Não. A simulação e análise inicial são totalmente gratuitas. Você só paga se conseguirmos reduzir suas parcelas.',
  },
  {
    question: 'Como meus dados são protegidos?',
    answer:
      'Seguimos rigorosamente a LGPD. Seus dados são criptografados e utilizados apenas para análise do seu financiamento.',
  },
  {
    question: 'Posso cancelar o processo?',
    answer:
      'Sim, você pode cancelar a qualquer momento antes da assinatura do novo contrato, sem custos.',
  },
  {
    question: 'A redução é garantida?',
    answer:
      'Trabalhamos com uma taxa de sucesso superior a 85%, mas a redução depende da análise individual de cada caso.',
  },
  {
    question: 'Como entro em contato pelo WhatsApp?',
    answer:
      'Clique no botão de WhatsApp em qualquer parte do site e você será direcionado para nossa equipe de atendimento.',
  },
  {
    question: 'Qual a economia média conseguida?',
    answer:
      'A economia varia entre 30% e 70% do valor da parcela, dependendo das condições atuais do contrato e do mercado.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left focus-ring"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-gray-500 transition-transform',
                openIndex === index && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </button>
          {openIndex === index && (
            <div className="border-t border-gray-200 p-4">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

