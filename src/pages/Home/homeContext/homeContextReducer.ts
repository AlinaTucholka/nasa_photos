export interface SearchingData {
    query: string;
    startDate?: Date;
    endDate?: Date;
}

export const initialHomeContextState: SearchingData = { query: '' };

export enum Action {
    SET_SEARCHING_DATA = 'SET_SEARCHING_DATA',
}

export function homeContextReducer(
    searchingData: SearchingData,
    action: { type: Action; payload: SearchingData }
) {
    switch (action.type) {
        case Action.SET_SEARCHING_DATA: {
            return { ...searchingData, ...action.payload };
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}
