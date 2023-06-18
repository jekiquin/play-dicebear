import { generateOptionList } from './helpers';

export const avatarOptions = {
  hair: [...generateOptionList('long', 24), ...generateOptionList('short', 19)],
  hairColor: [
    '0e0e0e',
    '6a4e35',
    'cb6820',
    'ca3656',
    'e5d7a3',
    '85c2c6',
    '592454',
    'afafaf',
  ],
  eyes: generateOptionList('variant', 26),
  eyebrows: generateOptionList('variant', 15),
  mouth: generateOptionList('variant', 30),
  skinColor: ['9e5622', '763900', 'ecad80', 'f2d3b1'],
  backgroundColor: ['b6e3f4', 'c0aede', 'ffd5dc', 'ffdfbf'],
};

export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export const ROUTE = {
  home: '/',
  avatarEdit: '/avatar-edit',
};

export const USER = 1;
