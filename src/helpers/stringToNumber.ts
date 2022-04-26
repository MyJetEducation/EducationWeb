export const stringToNumber = (s: string) => {
  return Number(String(s).replace(/[^0-9.-]+/g, ''));
};
