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
  let queryList: string[] = [];

  Object.entries(queryObj).forEach(([key, value]) => {
    if (value !== null) {
      queryList.push(`${key}=${value}`);
    }
  });

  return queryList.length ? '?scale=75&' + queryList.join('&') : '';
};
