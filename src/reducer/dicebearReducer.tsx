import { avatarOptions } from '@/utils/constants';
import { DicebearQuery, DicebearQueryKey } from '@/utils/helpers';

type Action = {
  type: DicebearQueryKey;
  payload: string;
};

const { backgroundColor, eyebrows, eyes, hair, hairColor, mouth, skinColor } =
  avatarOptions;

export const initState = {
  backgroundColor: backgroundColor[0],
  eyebrows: eyebrows[0],
  eyes: eyes[0],
  hair: hair[0],
  hairColor: hairColor[0],
  mouth: mouth[0],
  skinColor: skinColor[0],
};

export const reducer = (state: DicebearQuery, action: Action) => {
  return initState[action.type] !== undefined
    ? { ...state, [action.type]: action.payload }
    : state;
};
