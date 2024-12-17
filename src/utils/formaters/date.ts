export const formatDate = (date: Date): string => {
  if (!(date instanceof Date)) {
    throw new Error('O parâmetro deve ser uma instância válida de Date');
  }

  const locale = typeof window !== 'undefined' ? navigator.language : 'en-US';

  const options: Intl.DateTimeFormatOptions =
    locale === 'pt-BR'
      ? { day: '2-digit', month: '2-digit', year: 'numeric' }
      : { month: '2-digit', day: '2-digit', year: 'numeric' };

  return new Intl.DateTimeFormat(locale, options).format(date);
};
