export function maskPhone(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return value;
}

export function unmaskPhone(value: string): string {
  return value.replace(/\D/g, '');
}

export function maskCurrency(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const number = parseFloat(cleaned) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

