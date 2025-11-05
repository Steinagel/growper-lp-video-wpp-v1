export function buildWhatsAppLink(
  phone: string,
  message: string,
  params?: Record<string, string>
): string {
  const url = new URL(`https://wa.me/${phone}`);
  
  let fullMessage = message;
  if (params && Object.keys(params).length > 0) {
    const utmString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    fullMessage = `${message}\n\nReferência: ${utmString}`;
  }
  
  url.searchParams.set('text', fullMessage);
  return url.toString();
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });
  
  return utm;
}

