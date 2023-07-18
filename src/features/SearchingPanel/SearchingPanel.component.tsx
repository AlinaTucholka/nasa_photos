import { useCallback } from 'react';
import { useHomeContextDispatch } from 'pages/Home/homeContext/homeDispatchContext';
import {
    Action,
    SearchingData,
} from 'pages/Home/homeContext/homeContextReducer';
import SearchingPanelForm from './components/SearchingPanelForm.component';

export default function SearchingPanel() {
    const dispatch = useHomeContextDispatch();

    const handleOnSubmit = useCallback(
        (data: SearchingData) => {
            dispatch({ type: Action.SET_SEARCHING_DATA, payload: data });
        },
        [dispatch]
    );

    return <SearchingPanelForm onSubmit={handleOnSubmit} />;
}
