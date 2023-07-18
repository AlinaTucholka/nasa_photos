import { ReactNode, useReducer } from 'react';
import {
    homeContextReducer,
    initialHomeContextState,
} from './homeContextReducer';
import { HomeDispatchContext } from './homeDispatchContext';
import { HomeContext } from './useHomeContext';

interface HomeContextProviderProps {
    children: ReactNode;
}

export function HomeContextProvider({ children }: HomeContextProviderProps) {
    const [state, dispatch] = useReducer(
        homeContextReducer,
        initialHomeContextState
    );

    return (
        <HomeContext.Provider value={state}>
            <HomeDispatchContext.Provider value={dispatch}>
                {children}
            </HomeDispatchContext.Provider>
        </HomeContext.Provider>
    );
}
