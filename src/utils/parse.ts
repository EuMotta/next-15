/* eslint-disable @typescript-eslint/no-explicit-any */

const getString = (value: string) => (value || '').toString();

const getDateIfValid = (value: string | number): Date | null => {
  const date = Date.parse(value.toString());
  return Number.isNaN(date) ? null : new Date(date);
};

const getArrayIfValid = (value: any): any[] | null => {
  return Array.isArray(value) ? value : null;
};

const isNumber = (value: string | number): boolean =>
  !Number.isNaN(parseFloat(value.toString())) && Number.isFinite(Number(value));

const getNumberIfValid = (value: string | number): number | null =>
  isNumber(value) ? parseFloat(value.toString()) : null;

const getNumberIfPositive = (value: string | number): number | null => {
  const n = getNumberIfValid(value);
  return n !== null && n >= 0 ? n : null;
};

const getBooleanIfValid = (
  value: string | boolean,
  defaultValue: boolean | null = null
): boolean | null => {
  if (value === 'true' || value === 'false') return value === 'true';

  return typeof value === 'boolean' ? value : defaultValue;
};

const getBrowser = (browser: { ip: string; user_agent: string } | null) =>
  browser
    ? {
        ip: getString(browser.ip),
        user_agent: getString(browser.user_agent)
      }
    : {
        ip: '',
        user_agent: ''
      };

const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

const getEmailIfValid = (value: string | undefined): string | null => {
  return value && isValidEmail(value) ? value : null;
};

const isValidUUID = (value: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
};

export default {
  getString,
  isValidUUID,
  getDateIfValid,
  getEmailIfValid,
  getArrayIfValid,
  getNumberIfValid,
  getNumberIfPositive,
  getBooleanIfValid,
  getBrowser
};
