import { BACKEND_URL } from '@/config';

export interface DicebearQuery {
  backgroundColor: string;
  eyebrows: string;
  eyes: string;
  hair: string;
  hairColor: string;
  mouth: string;
  skinColor: string;
}

export type DicebearQueryKey = keyof DicebearQuery;

export const constructQuery = (queryObj: DicebearQuery) => {
  if (!BACKEND_URL) throw new Error('Missing Dicebear URL');

  const queryListString = queryObjectToQueryString(queryObj);

  return queryListString.length
    ? `${BACKEND_URL}?scale=75&${queryListString}`
    : BACKEND_URL;
};

export const queryObjectToQueryString = (queryObj: DicebearQuery) => {
  let queryList: string[] = [];

  Object.entries(queryObj).forEach(([key, value]) => {
    if (value !== null) {
      queryList.push(`${key}=${value}`);
    }
  });

  return queryList.join('&');
};

export const camelCaseToRegular = (str: string) => {
  return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
};

export const generateOptionList = (prefix: string, iterations: number) => {
  return Array(iterations)
    .fill(prefix)
    .map((item, idx) => item + `${idx + 1}`.padStart(2, '0'));
};
