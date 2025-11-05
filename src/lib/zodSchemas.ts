import { z } from 'zod';

export const leadSchema = z.object({
  nome: z.string().min(2, 'Informe seu nome completo'),
  whatsapp: z
    .string()
    .min(11, 'WhatsApp inválido')
    .regex(/^\d{11}$/, 'WhatsApp deve conter 11 dígitos'),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar o tratamento de dados',
  }),
  contexto: z.record(z.string(), z.any()).optional(),
  website: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export const calculatorSchema = z.object({
  hasFinancing: z.enum(['sim', 'nao']),
  parcelaAtual: z.string().optional(),
  nome: z.string().min(2, 'Informe seu nome completo').optional(),
  whatsapp: z
    .string()
    .min(11, 'WhatsApp inválido')
    .regex(/^\d{11}$/, 'WhatsApp deve conter 11 dígitos')
    .optional(),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Você deve aceitar o tratamento de dados',
    })
    .optional(),
  website: z.string().optional(),
});

export type CalculatorFormData = z.infer<typeof calculatorSchema>;
