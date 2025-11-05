'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { calculatorSchema, type CalculatorFormData } from '@/lib/zodSchemas';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Checkbox } from './ui/Checkbox';
import { maskCurrency, unmaskPhone, maskPhone } from '@/lib/mask';
import { formatCurrency } from '@/lib/utils';
import { WhatsAppButton } from './WhatsAppButton';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function Calculator() {
  const [step, setStep] = useState<'initial' | 'form' | 'result' | 'no-financing'>('initial');
  const [parcelaValue, setParcelaValue] = useState('');
  const [result, setResult] = useState<{ min: number; max: number; suggested: number } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
  });

  const hasFinancing = watch('hasFinancing');

  const handleInitialChoice = (choice: 'sim' | 'nao') => {
    setValue('hasFinancing', choice);
    if (choice === 'nao') {
      setStep('no-financing');
    } else {
      setStep('form');
    }
  };

  const onSubmit = async (data: CalculatorFormData) => {
    const parcela = parseFloat(parcelaValue.replace(/[^\d,]/g, '').replace(',', '.'));

    const min = parcela * 0.3;
    const max = parcela * 0.7;
    const suggested = parcela * 0.5;

    setResult({ min, max, suggested });

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.nome,
          whatsapp: data.whatsapp,
          email: data.email,
          consent: data.consent,
          contexto: {
            tipo: 'calculadora-imobiliario',
            parcelaAtual: parcela,
            economiaEstimada: suggested,
          },
        }),
      });
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
    }

    setStep('result');
  };

  if (step === 'initial') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">
          Você tem um financiamento imobiliário?
        </h3>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={() => handleInitialChoice('sim')}
            variant="primary"
            size="lg"
            className="flex-1"
          >
            Sim
          </Button>
          <Button
            onClick={() => handleInitialChoice('nao')}
            variant="outline"
            size="lg"
            className="flex-1"
          >
            Não
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'no-financing') {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-start gap-3">
          <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Nosso foco é quem já tem financiamento
            </h3>
            <p className="text-gray-600">
              Ajudamos pessoas que têm dificuldades para pagar parcelas ou pagam valores altos.
              Mas temos outras soluções que podem te ajudar:
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <WhatsAppButton
            message="Olá! Gostaria de saber sobre empréstimos."
            variant="primary"
            size="md"
            className="w-full"
          />
          <WhatsAppButton
            message="Olá! Gostaria de saber sobre financiamento de veículos."
            variant="outline"
            size="md"
            className="w-full"
          />
          <WhatsAppButton
            message="Olá! Gostaria de saber sobre consórcio."
            variant="outline"
            size="md"
            className="w-full"
          />
        </div>

        <button
          onClick={() => setStep('initial')}
          className="mt-6 text-sm text-primary-600 hover:underline"
        >
          ← Voltar
        </button>
      </div>
    );
  }

  if (step === 'result' && result) {
    const economia = result.suggested;
    const economiaAnual = economia * 12;

    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-lg md:p-8">
        <div className="mb-6 flex items-start gap-3">
          <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Você pode economizar até:
            </h3>
            <p className="text-4xl font-bold text-green-600">{formatCurrency(economia)}/mês</p>
            <p className="mt-2 text-lg text-gray-700">
              Isso representa {formatCurrency(economiaAnual)} por ano!
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-lg bg-white p-4">
          <p className="text-sm text-gray-600">
            <strong>Faixa de economia estimada:</strong> entre {formatCurrency(result.min)} e{' '}
            {formatCurrency(result.max)} por mês
          </p>
        </div>

        <WhatsAppButton
          message={`Olá! Fiz a simulação e posso economizar ${formatCurrency(economia)}/mês. Quero saber mais!`}
          variant="accent"
          size="lg"
          className="w-full"
        />

        <button
          onClick={() => {
            setStep('initial');
            setResult(null);
            setParcelaValue('');
          }}
          className="mt-4 text-sm text-primary-600 hover:underline"
        >
          ← Fazer nova simulação
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">
      <h3 className="mb-6 text-2xl font-semibold text-gray-900">Simule sua economia</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="parcela" className="mb-2 block text-sm font-medium text-gray-700">
            Valor da parcela atual
          </label>
          <input
            id="parcela"
            type="text"
            value={parcelaValue}
            onChange={(e) => setParcelaValue(maskCurrency(e.target.value))}
            className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base focus-ring"
            placeholder="R$ 0,00"
            required
          />
        </div>

        <Input
          label="Nome completo"
          {...register('nome')}
          error={errors.nome?.message}
          placeholder="Seu nome"
          required
        />

        <Input
          label="WhatsApp"
          {...register('whatsapp')}
          error={errors.whatsapp?.message}
          placeholder="(11) 99999-9999"
          onChange={(e) => {
            const unmasked = unmaskPhone(e.target.value);
            setValue('whatsapp', unmasked);
            e.target.value = maskPhone(e.target.value);
          }}
          required
        />

        <Input
          label="E-mail (opcional)"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          placeholder="seu@email.com"
        />

        <Checkbox
          {...register('consent')}
          error={errors.consent?.message}
          label="Aceito o tratamento dos meus dados conforme a Política de Privacidade"
          required
        />

        <input type="text" {...register('website')} className="hidden" tabIndex={-1} />

        <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
          {isSubmitting ? 'Calculando...' : 'Calcular Economia'}
        </Button>
      </form>
    </div>
  );
}

