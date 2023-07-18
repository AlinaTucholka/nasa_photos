import { Dispatch, createContext, useContext } from 'react';
import { Action, SearchingData } from './homeContextReducer';

export const HomeDispatchContext = createContext<
    Dispatch<{ type: Action; payload: SearchingData }>
>(() => {});
HomeDispatchContext.displayName = 'HomeDispatchContext';

export function useHomeContextDispatch() {
    return useContext(HomeDispatchContext);
}
