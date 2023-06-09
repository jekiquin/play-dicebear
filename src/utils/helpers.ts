export interface DicebearQuery {
  seed: string | null;
  backgroundColor: string | null;
  eyebrows: string | null;
  eyes: string | null;
  hair: string | null;
  hairColor: string | null;
  mouth: string | null;
  skinColor: string | null;
}

export const constructQuery = (queryObj: DicebearQuery) => {
  let queryList: string[] = [];

  Object.entries(queryObj).forEach(([key, value]) => {
    if (value !== null) {
      queryList.push(`${key}=${value}`);
    }
  });

  return queryList.length ? '?' + queryList.join('&') : '';
};
