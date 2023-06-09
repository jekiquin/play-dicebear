import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from 'react';

import { DicebearQuery, constructQuery } from '@/utils/helpers';
import { initState, reducer } from '@/reducer/dicebearReducer';

type DicebearContextType = {
  query: DicebearQuery;
  queryString: string;
  dispatch: Dispatch<any>;
};

const initialContext: DicebearContextType = {
  query: initState,
  queryString: constructQuery(initState),
  dispatch: () => {},
};

const DicebearContext = createContext(initialContext);

export const useDicebearContext = () => useContext(DicebearContext);

export default function DicebearProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [query, dispatch] = useReducer(reducer, initState);
  const queryString = constructQuery(query);

  return (
    <DicebearContext.Provider value={{ query, queryString, dispatch }}>
      {children}
    </DicebearContext.Provider>
  );
}
