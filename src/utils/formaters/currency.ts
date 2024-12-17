export const formatCurrency = (value: number) => {
  const locale = typeof window !== 'undefined' ? navigator.language : 'en-US';

  const currency = locale === 'pt-BR' ? 'BRL' : 'USD';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value);
};
