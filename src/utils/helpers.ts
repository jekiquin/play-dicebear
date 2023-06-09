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

  let queryList: string[] = [];

  Object.entries(queryObj).forEach(([key, value]) => {
    if (value !== null) {
      queryList.push(`${key}=${value}`);
    }
  });

  return queryList.length
    ? `${BACKEND_URL}?scale=75&${queryList.join('&')}`
    : BACKEND_URL;
};

export const camelCaseToRegular = (str: string) => {
  return str.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);
};
