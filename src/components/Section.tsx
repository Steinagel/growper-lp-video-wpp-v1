import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: 'section' | 'div';
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}

