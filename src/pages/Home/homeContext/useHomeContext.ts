import { createContext, useContext } from 'react';
import { SearchingData, initialHomeContextState } from './homeContextReducer';

export const HomeContext = createContext<SearchingData>(
    initialHomeContextState
);
HomeContext.displayName = 'HomeContext';

export function useHomeContext() {
    return useContext(HomeContext);
}
