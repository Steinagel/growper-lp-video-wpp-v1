'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink, getUTMParams } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function WhatsAppButton({
  message = 'Olá! Quero reduzir minhas parcelas de financiamento imobiliário.',
  className,
  variant = 'accent',
  size = 'lg',
}: WhatsAppButtonProps) {
  const phone = process.env.NEXT_PUBLIC_WPP_PHONE || '5511999999999';
  const utm = getUTMParams();
  const link = buildWhatsAppLink(phone, message, utm);

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={className}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>Falar no WhatsApp</span>
      </a>
    </Button>
  );
}
